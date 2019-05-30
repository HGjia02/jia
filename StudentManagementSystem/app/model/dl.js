module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Dl = app.model.define('dl', { //sequelize会自动创建主键
        name: STRING,
        password:STRING,
    })
    return Dl;
}