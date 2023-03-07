import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { createAnamneseService } from "../../services/anamneses/createAnamnese.service";
import { listAllAnamnesesService } from "../../services/anamneses/listAllAnamneses.service";
import { listOneAnamneseService } from "../../services/anamneses/listOneAnamnese.service";
import { updateAnamneseService } from "../../services/anamneses/updateAnamnese.service";
import { deleteAnamneseService } from "../../services/anamneses/deleteAnamnese.service";

export const createAnamneseController = async (req: Request, res: Response) => {
  try {
    const { descricao, paciente } = req.body;

    const result = await createAnamneseService({
      criado_em: `${Date.now()}`,
      descricao,
      paciente,
    });

    res.status(201).json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const listAllAnamnesesController = async (
  req: Request,
  res: Response,
) => {
  try {
    const result = await listAllAnamnesesService();

    res.json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const listOneAnamneseController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;

    const result = await listOneAnamneseService({ id });

    res.json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const updateAnamneseController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { descricao } = req.body;

    await updateAnamneseService({ id, descricao });

    res.status(204);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const deleteAnamneseController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await deleteAnamneseService({ id });

    res.status(204);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};
