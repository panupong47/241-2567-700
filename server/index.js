const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise')

const port = 8000;

app.use(bodyParser.json());

let users = [];
let counter = 1;

let conn = null

const initMySQL = async () => {
    const conn = await mysql.createConnection({
        host: 'localhost',
            user: 'root',
            database: 'webdb',
            port: 8850
        })
}

//path: GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
app.get('/users',async (req, res) => {
    const result =  await conn.query('SELECT * FROM users')
    res.json(result[0])
})

//path: POST /user สำหรับสร้าง user ใหม่บันทึกเข้าไป
app.post('/users',async (req, res) => {
    let user = req.body;
    const result = await conn.query('INSERT INTO users SET ?', user)
    console.log('result', result)
    res.json({
        message: 'Create user successfully',
        data: result[0]
})
})

//path: GET /users/:id สำหรับดึง  users รายคนออกมา
app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    //ค้นหา users จาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id)

    res.json(users[selectedIndex])
})


//path: PUT /user/:id ใช้สำหรับแก้ไขข้อมูล user ที่มี id ตามที่ระบุ
app.put('/users/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    let selectedIndex = users.findIndex(user => user.id == id)

    users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname
    users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname
    users[selectedIndex].age = updateUser.age || users[selectedIndex].age
    users[selectedIndex].grnder = updateUser.gender || users[selectedIndex].gender

    res.json({
        message: 'Update user successfully',
        data: {
            user: updateUser,
            indexUpdate: selectedIndex
        }
    })
})

//path: DELETE /user/:id ใช้สำหรับลบข้อมูล user ที่มี id ตามที่ระบุ
app.delete('/users/:id', (req, res) => {
    let id = req.params.id;
    //หาusers จาก user ที่ต้องการลบ
    let selectedIndex = users.findIndex(user => user.id == id)

    //ลบข้อมูล user
    users.splice(selectedIndex, 1)
    res.json({
        message: 'Delete user successfully',
        indexDelete: selectedIndex
    })
})

app.listen(port, (req, res) => {
    console.log('Http Server is running on port ' + port);
});

//path: GET /users/:id สำหรับดึง  users รายคนออกมา
app.get('/users', (req, res) => {
    let id = req.params.id;
    const filterUsers = users.map(user => {
        return {
            firstname: user.firstname,
            lastname: user.lastname,
            fullname: user.firstname + ' ' + user.lastname
        }
    })
    res.json(filterUsers)
})

app.listen(port,async (req, res) => {
    await initMySQL()
    console.log('Http Server is running on port ' + port);
})