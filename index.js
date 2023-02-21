const express = require('express');
const cors = require('cors');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });
const app = express();
const port = 3001;
const productRouter = require('./router/productRouter');
const installStatusRouter = require('./router/installStatusRouter');
const photoCategoriRouter = require('./router/photoCategoriRouter');
const serviceBoardRouter = require('./router/serviceBoardRouter');
const methodOverride = require('method-override'); //delete 등을 사용하기위한 모듈


app.use(express.urlencoded({ extended: true })) // 폼데이터를 활용하기 위한 기능 x-www-form-urlencoded형태의 데이터를 해석
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(methodOverride('_method'));
app.use('/product', productRouter);
app.use('/install', installStatusRouter);
app.use('/photo', photoCategoriRouter);
app.use('/service', serviceBoardRouter);

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
