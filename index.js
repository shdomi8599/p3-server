const express = require('express');
const cors = require('cors');
const path = require('path');
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });
const app = express();
const port = 3001;
const productRouter = require('./router/productRouter');
const installStatusRouter = require('./router/installStatusRouter');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/product', productRouter);
app.use('/install', installStatusRouter);

// app.post('/upload', upload.single('image'), (req, res) => {
//     // 파일 업로드 처리
//     res.send('Image uploaded');
// });

app.get('/', (req, res) => {
    res.send('홈');
});

app.listen(port, () => {
    console.log(`${port}포트 서버 on`);
});
