import { response, request } from 'express'

export const usuariosGet = (req, res = response) => {

    const { q, nombre = "No name", apikey } = req.query;

    res.status(403).json({
        msg: 'get API - Controller',
        q,
        apikey,
        nombre
    }) 
}

export const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.status(403).json({
        msg: 'put API - Controller',
        id
    })
}

export const usuariosPost = (req = request, res = response) => {

    const {nombre, edad} = req.body

    res.json({
        msg: 'post API - Controller',
        nombre,
        edad
    })
}
export const usuariosDelete = (req, res = response) => {
    res.status(403).json({
        msg: 'delete API - Controller'
    })
}

export const usuariosPatch = (req, res = response) => {
    res.status(403).json({
        msg: 'patch API - Controller'
    })
}