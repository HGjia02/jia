module.exports = app => {
    app.beforeStart(async function () {
        // await app.model.sync({ force: true }); // ��������ʹ�ã���ɾ�����ݱ�
        await app.model.sync({});
    });
};