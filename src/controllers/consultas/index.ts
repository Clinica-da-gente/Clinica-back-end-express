import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { createConsultaService } from "../../services/consultas/createConsulta.service";
import { listAllConsultasService } from "../../services/consultas/listAllConsultas.service";
import { listOneConsultaService } from "../../services/consultas/listOneConsulta.service";
import { updateConsultaService } from "../../services/consultas/updateConsulta.service";
import { deleteConsultaService } from "../../services/consultas/deleteConsulta.service";

export const createConsultaController = async (req: Request, res: Response) => {
  try {
    const { descricao, horario, medico, paciente, usuario } = req.body;

    const result = await createConsultaService({
      atualizado_em: `${Date.now()}`,
      cancelada: false,
      compareceu: false,
      confirmado: false,
      criado_em: `${Date.now()}`,
      pago: false,
      descricao,
      horario,
      medico,
      paciente,
      usuario,
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
      cancelada,
      compareceu,
      confirmado,
      descricao,
      horario,
      medico,
      paciente,
      pago,
      usuario,
    } = req.body;

    await updateConsultaService({
      id,
      cancelada,
      compareceu,
      confirmado,
      descricao,
      horario,
      medico,
      paciente,
      pago,
      usuario,
    });

    res.status(204);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const deleteConsultaController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await deleteConsultaService({ id });

    res.status(204);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};
