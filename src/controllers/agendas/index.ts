import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { createAgendaService } from "../../services/agendas/createAgenda.service";
import { listAllAgendasService } from "../../services/agendas/listAllAgendas.service";
import { listOneAgendaService } from "../../services/agendas/listOneAgenda.service";
import { updateAgendaService } from "../../services/agendas/updateAgenda.service";
import { deleteAgendaService } from "../../services/agendas/deleteAgenda.service";

const createAgendaController = async (req: Request, res: Response) => {
  try {
    const {
      consulta,
      data_hora_inicial,
      dia_da_consulta,
      horario_final,
      horario_inicial,
      medico,
    } = req.body;

    const result = await createAgendaService({
      consulta,
      data_hora_inicial,
      dia_da_consulta,
      horario_final,
      horario_inicial,
      medico,
    });

    res.status(201).json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

const listAllAgendasController = async (req: Request, res: Response) => {
  try {
    const result = await listAllAgendasService();

    res.json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

const listOneAgendaController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await listOneAgendaService({ id });

    res.json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

const updateAgendaController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      consulta,
      data_hora_inicial,
      dia_da_consulta,
      horario_final,
      horario_inicial,
      medico,
    } = req.body;

    await updateAgendaService({
      id,
      consulta,
      data_hora_inicial,
      dia_da_consulta,
      horario_final,
      horario_inicial,
      medico,
    });

    res.status(204);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

const deleteAgendaController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await deleteAgendaService({ id });

    res.status(204).json();
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export {
  createAgendaController,
  listAllAgendasController,
  listOneAgendaController,
  updateAgendaController,
  deleteAgendaController,
};
