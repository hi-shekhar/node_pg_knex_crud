import express, { Router, Response, Request } from "express";
import { deleteBook, getAllBooks, getBook, saveBooks, updateBook } from "./db";
import { validateCreateableBook, validateUpdateBook } from "./validation";

const router: Router = express.Router();
export default router;

router.get("/", async (req: Request, res: Response) => {
  try {
    const rval = await getAllBooks();
    res.status(200).send(rval);
  } catch (err: any) {
    res.status(500).send(err.toString());
  }
});

router.post(
  "/",
  validateCreateableBook,
  async (req: Request, res: Response) => {
    try {
      const rval = await saveBooks(req.body);
      res.status(201).send(rval);
    } catch (err: any) {
      res.status(500).send(err.toString());
    }
  }
);

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const rval = await getBook(Number(id));
    if (rval) {
      res.status(200).send(rval);
    } else {
      res.sendStatus(404);
    }
  } catch (err: any) {
    res.status(500).send(err.toString());
  }
});

router.put("/:id", validateUpdateBook, async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const rval = await updateBook(Number(id), req.body);
    if (rval) {
      res.status(200).send(rval);
    } else {
      res.sendStatus(404);
    }
  } catch (err: any) {
    res.status(500).send(err.toString());
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const rval = await deleteBook(Number(id));
    if (rval) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err: any) {
    res.status(500).send(err.toString());
  }
});
