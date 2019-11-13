'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')

class Image extends Model {
  post() {
      return this.belongsTo('/App/Models/Post')
  }

  getUrl({ path }) {
    return `${Env.get('APP_URL')}/images/${path}`
  }
}

module.exports = Image
