import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { createPacienteService } from "../../services/pacientes/createPaciente.service";
import { listAllPacientesServices } from "../../services/pacientes/listAllPacientes.service";
import { listOnePacienteService } from "../../services/pacientes/listOnePaciente.service";
import { updatePacienteService } from "../../services/pacientes/updatePaciente.service";
import { deletePacienteService } from "../../services/pacientes/deletePaciente.service";

export const createPacienteController = async (req: Request, res: Response) => {
  try {
    const { cpf, data_nascimento, email, id_convenio, nome, telefone } =
      req.body;

    const result = await createPacienteService({
      cpf,
      data_nascimento,
      email,
      id_convenio,
      nome,
      telefone,
    });

    res.status(201).json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const listAllPacienteController = async (
  req: Request,
  res: Response,
) => {
  try {
    const result = await listAllPacientesServices();

    res.json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const listOnePacienteController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;

    const result = await listOnePacienteService({ _id: id });

    res.json(result);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const updatePacienteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { cpf, data_nascimento, email, id_convenio, nome, telefone } =
      req.body;

    await updatePacienteService({
      _id: id,
      cpf,
      data_nascimento,
      email,
      id_convenio,
      nome,
      telefone,
    });

    res.status(204);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const deletePacienteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await deletePacienteService({ _id: id });

    res.status(204).json();
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};
