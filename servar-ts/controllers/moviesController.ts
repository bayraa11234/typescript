import { Request, Response } from "express";
import MovieModel, { IMovie } from "../models/movieModel";

export const countAllMovies = async (req: Request, res: Response) => {
  res.json(await MovieModel.count({}));
};

export const findAllMovies = async (req: Request, res: Response) => {
  const {
    limit = "10",
    skip = "0",
    ordering = "releasedAsc",
    filtering = "",
    q = "",
  } = req.query;
  let sort = "";
  switch (ordering) {
    case "releasedAsc":
      sort = "released";
      break;
    case "awardsWinsDesc":
      sort = "-awards.wins";
      break;
    case "titleAsc":
      sort = "title";
      break;
    case "titleDesc":
      sort = "-title";
      break;
    default:
      sort = "-released";
      break;
  }
  const condition: any = {};

  if (filtering) {
    condition.genres = filtering;
  }
  if (q) {
    condition.title = { $regex: new RegExp(`${q}`, "i") };
  }

  const result: IMovie[] = await MovieModel.find(condition)
    .sort(sort)
    .limit(Number(limit))
    .skip(Number(skip));
  res.json(result);
};

export const findMovieById = async (req: Request, res: Response) => {
  const { _id } = req.params;

  const result: IMovie | null = await MovieModel.findById(_id);
  res.json(result);
};
