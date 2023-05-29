import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { createCaixaService } from "../../services/caixas/createCaixa.service";
import { listAllCaixasService } from "../../services/caixas/listAllCaixas.service";
import { listOneCaixaService } from "../../services/caixas/listOneCaixa.service";
import { updateCaixaService } from "../../services/caixas/updateCaixa.service";
import { deleteCaixaService } from "../../services/caixas/deleteCaixa.service";

const createCaixaController = async (req: Request, res: Response) => {
  try {
    const {} = req.body;

    const result = await createCaixaService({});

    res.status(201).json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

const listAllCaixasController = async (req: Request, res: Response) => {
  try {
    const result = await listAllCaixasService();
    res.json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

const listOneCaixaController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await listOneCaixaService({ id });

    res.json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

const updateCaixaController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {} = req.body;

    await updateCaixaService({ id });

    res.status(204);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

const deleteCaixaController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await deleteCaixaService({ id });

    res.status(204).json();
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export {
  createCaixaController,
  deleteCaixaController,
  listAllCaixasController,
  listOneCaixaController,
  updateCaixaController,
};
