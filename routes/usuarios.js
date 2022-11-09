import {Router} from 'express';
import { usuariosGet, usuariosPut, usuariosDelete, usuariosPost, usuariosPatch } from '../controllers/usuarios.js';

export const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuariosPut)

router.post('/', usuariosPost)

router.delete('/', usuariosDelete)

router.patch('/', usuariosPatch)