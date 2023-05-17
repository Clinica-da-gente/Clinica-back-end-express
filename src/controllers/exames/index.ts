import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import {
  createExameService,
  deleteExameService,
  listAllExamesService,
  listOneExameService,
  updateExameService,
  listLastExamesByPacienteService,
} from "../../services/exames";

export const createExameController = async (req: Request, res: Response) => {
  try {
    const { nome, executante, valor, convenios } = req.body;
    const result = await createExameService({
      nome,
      executante,
      valor,
      convenios,
    });
    res.status(201).json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const listAllExamesController = async (req: Request, res: Response) => {
  try {
    const result = await listAllExamesService();
    res.json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const listOneExameController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await listOneExameService({ id });
    res.json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const updateExameController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { convenios, executor, nome, valor } = req.body;
    const result = await updateExameService({
      id,
      convenios,
      executor,
      nome,
      valor,
    });
    res.status(204).json();
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const deleteExameController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await deleteExameService({ id });
    res.status(204).json();
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const listLastExamesByPacienteController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const result = await listLastExamesByPacienteService({ id });
    res.json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};
