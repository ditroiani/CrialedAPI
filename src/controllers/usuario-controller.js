import Usuario from "../models/usuario.js";

class UsuarioController {
  // Insert
  async store(req, res) {
    console.log(req.body);

    try {
      const novoUsuario = await Usuario.create(req.body);

      res.status(200).json({
        Msg: "Usuário cadastrado!",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        Msg: "Usuário não cadastrado!",
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const usuarios = await Usuario.findAll({
        attributes: ["nome", "cpf", "email", "created_at"],
      });

      res.status(200).json(usuarios);
    } catch (error) {
      return res.status(400).json({
        err: "Cannot get Usuarios",
      });
    }
  }

  // Read (id)
  async find(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id, {
        attributes: ["nome", "cpf", "email", "departamento", "created_at"],
      });

      res.status(200).json(usuario);
    } catch (error) {
      return res.status(400).json({
        err: "Cannot get Usuario",
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);

      if (!usuario) {
        return res.status(400).json({
          err: "Cannot update Usuario",
        });
      }

      const usuarioAlterado = await usuario.update(req.body);

      return res.status(200).json({
        Msg: "Usuário de ID:" + id + " alterado!",
        Usuario: usuarioAlterado,
      });
    } catch (error) {
      return res.status(400).json({
        err: "Cannot update Usuario",
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);

      if (!usuario) {
        return res.status(400).json({
          err: "Cannot update Usuario",
        });
      }

      await usuario.destroy();

      return res.status(400).json({
        Msg: "Usuário de ID:" + id + " alterado!",
        Usuario: usuario,
      });
    } catch (error) {
      return res.status(400).json({
        err: "Cannot delete Usuario",
      });
    }
  }
}

export default new UsuarioController();
