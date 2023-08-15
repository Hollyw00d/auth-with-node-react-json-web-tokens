import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { RowDataPacket } from 'mysql2';
import Models from '../model/db.models';

const models = new Models();

export default class ResetPasswordControllers {
  async forgot(req: Request, res: Response) {
    const { email } = req.body;
    const token = Math.random().toString(20).slice(2, 12);

    await models.createResetEntry(process.env.DB_TABLE2, email, token);

    const getResetEntry = await models.findResetByEmail(
      process.env.DB_TABLE2,
      email
    );

    if (getResetEntry === false) {
      return res.status(400).send({
        message: 'Something went wrong'
      });
    }

    const transporter = nodemailer.createTransport({
      host: '0.0.0.0',
      port: 1025
    });

    const url = `http://localhost:3000/reset/${token}`;

    await transporter.sendMail({
      from: 'from@example.com',
      to: email,
      subject: 'Reset your password!',
      html: `Click <a href="${url}" target="_blank">here</a> to reset your password!`
    });

    return res.send({
      message: 'Please check your email!'
    });
  }

  async reset(req: Request, res: Response) {
    const { token, password, passwordConfirm } = req.body;

    if (password !== passwordConfirm) {
      return res.status(400).send({
        message: "Password's do not match"
      });
    }

    const getResetEntry1 = await models.findResetByToken(
      process.env.DB_TABLE2,
      token
    );

    if (getResetEntry1 === false) {
      return res.status(400).send({
        message: 'Invalid link!'
      });
    }

    const getResetEntry2 = await models.findResetByEmail(
      process.env.DB_TABLE2,
      getResetEntry1.email
    );

    const getUserEmail = (getResetEntry2 as RowDataPacket[0])?.email ?? '';

    if (!getUserEmail) {
      return res.status(400).send({
        message: 'User not found!'
      });
    }

    await models.updatePasswordByEmail(
      process.env.DB_TABLE1,
      getUserEmail,
      password
    );

    return res.send({
      message: `Password updated for user with email ${getUserEmail}!`
    });
  }
}
