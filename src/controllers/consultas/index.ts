import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { createConsultaService } from "../../services/consultas/createConsulta.service";
import { listAllConsultasService } from "../../services/consultas/listAllConsultas.service";
import { listOneConsultaService } from "../../services/consultas/listOneConsulta.service";
import { updateConsultaService } from "../../services/consultas/updateConsulta.service";
import { deleteConsultaService } from "../../services/consultas/deleteConsulta.service";
import { listConsultByDoctorService } from "../../services/consultas/listConsultaByDoctor.service";
import jwt from "jsonwebtoken";
import { listLatestConsultasByPacienteService } from "../../services/consultas/listLatestConsultasByPaciente.service";

export const createConsultaController = async (req: Request, res: Response) => {
  try {
    const { descricao, horario, data, medico_id, paciente_id, usuario_id } =
      req.body;

    const result = await createConsultaService({
      atualizado_em: `${Date.now()}`,
      criado_em: `${Date.now()}`,
      pago: false,
      descricao,
      data,
      horario,
      medico_id,
      paciente_id,
      usuario_id,
      status: "agendado",
    });

    res.status(201).json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const listAllConsultasController = async (
  req: Request,
  res: Response,
) => {
  try {
    const result = await listAllConsultasService();

    res.json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const listOneConsultaController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;

    const result = await listOneConsultaService({ id });

    res.json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const updateConsultaController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      descricao,
      data,
      horario,
      medico_id,
      paciente_id,
      pago,
      usuario_id,
      status,
    } = req.body;

    await updateConsultaService({
      id,
      descricao,
      data,
      horario,
      medico_id,
      paciente_id,
      pago,
      usuario_id,
      status,
    });

    res.status(204).json();
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const deleteConsultaController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await deleteConsultaService({ id });

    res.status(204).json();
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const listConsultByDoctorController = async (
  req: Request,
  res: Response,
) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization) {
      throw new AppError(401, "Missing token");
    }
    const [, token] = authorization.split(" ");
    const decoded = jwt.verify(token, process.env.SECRET_KEY!);
    const result = await listConsultByDoctorService({ id: (<any>decoded).id });
    res.json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const listLatestConsultasByPacienteController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const result = await listLatestConsultasByPacienteService({ id });
    res.json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};
