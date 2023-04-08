import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { createPacienteService } from "../../services/pacientes/createPaciente.service";
import { listAllPacientesServices } from "../../services/pacientes/listAllPacientes.service";
import { listOnePacienteService } from "../../services/pacientes/listOnePaciente.service";
import { updatePacienteService } from "../../services/pacientes/updatePaciente.service";
import { deletePacienteService } from "../../services/pacientes/deletePaciente.service";
import { z } from "zod";

export const createPacienteController = async (req: Request, res: Response) => {
  const schema = z.object({
    cpf: z.string().nonempty("CPF é obrigatório"),
    data_nascimento: z.string().nonempty("Data de nascimento é obrigatória"),
    id_convenio: z.string().nonempty("ID do convênio é obrigatório"),
    nome: z.string().nonempty("Nome é obrigatório"),
    telefone: z.string().nonempty("Telefone é obrigatório"),
    observacoes: z
      .string()
      .max(256, "Observações deve ter, no máximo, 256 caracteres"),
  });

  try {
    const data = schema.parse(req.body);

    const result = await createPacienteService(data);

    res.status(201).json(result);
  } catch (err) {
    res.status(400).json(err);
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

    res.status(204);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};
