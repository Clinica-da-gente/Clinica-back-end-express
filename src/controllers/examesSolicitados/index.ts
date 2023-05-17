import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import {
  createExameSolicitadoService,
  listAllExamesSolicitadosService,
  deleteExameSolicitadoService,
  listOneExameSolicitadoService,
  updateExameSolicitadoService,
} from "../../services/examesSolicitados";

export const createExameSolicitadoController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { consulta_id, exames, medico_id, paciente_id } = req.body;
    const result = await createExameSolicitadoService({
      consulta_id,
      exames,
      medico_id,
      paciente_id,
    });
    res.status(201).json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const listAllExamesSolicitadosController = async (
  req: Request,
  res: Response,
) => {
  try {
    const result = await listAllExamesSolicitadosService();
    res.json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const listOneExameSolicitadoController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const result = await listOneExameSolicitadoService({ id });
    res.json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const updateExameSolicitadoController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const { consulta_id, exames, medico_id, paciente_id } = req.body;
    await updateExameSolicitadoService({
      id,
      consulta_id,
      exames,
      medico_id,
      paciente_id,
    });
    res.status(204).json();
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const deleteExameSolicitadoController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;
    await deleteExameSolicitadoService({ id });
    res.status(204).json();
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};
