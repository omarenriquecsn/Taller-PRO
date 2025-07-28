import { Request, Response } from "express";
import {
  createTurn,
  filterTurns,
  getAllTurns,
  updateTurn,
} from "../services/turnsService";

export const getTurnController = async (req: Request, res: Response) => {
  try {
    await getAllTurns().then((resp) => {
      res.status(200).json(resp);
    });
  } catch (error) {
    res
      .status(404)
      .json({ menssage: "Ha ocurrido un error al obtener el turno" });
    console.log("Error:", error);
  }
};

export const byIdTurnController = async (req: Request, res: Response) => {
  try {
    await filterTurns(Number(req.params.id)).then((resp) => {
      res.status(200).json(resp);
    });
  } catch (error) {
    res
      .status(404)
      .json({ menssage: "Ha ocurrido un error al buscar el turno" });
    console.log("Error:", error);
  }
};

export const createTurnController = async (req: Request, res: Response) => {
  try {
    await createTurn(req.body).then(() => {
      res.status(201).json({ menssage: "Turno Creado" });
    });
  } catch (error) {
    res
      .status(400)
      .json({ menssage: "Ha ocurrido un error al crear un turno" });
    console.log("Error:", error);
  }
};


export const updateTurnController = async (req: Request, res: Response) => {
  try {
    const {id} = req.params
    await updateTurn(Number(id)).then(() => {
      res.status(201).json({ menssage: "Turno Cancelado" });
    });
  } catch (error) {
    res
      .status(400)
      .json({ menssage: "Ha ocurrido un error al cancelar el turno" });
    console.log("Error:", error);
  }
};
