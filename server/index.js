const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 8000;

app.use(bodyParser.json());

let users = [];
let counter = 1

/*
GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
POST /user สำหรับสร้าง user ใหม่บันทึกเข้าไป
GET /user/:id สำหรับดึง users รายคนออกมา
PUT /user/:id สำหรับแก้ไขข้อมูล users รายคน(ตาม id ที่บันทึกเข้าไป)
DELETE /user/:id สำหรับลบ users รายคน(ตาม id ที่บันทึกเข้าไป)
*/


//path: GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
app.get('/users', (req, res) => {
    res.json(users);
});

//path: POST /user สำหรับสร้าง user ใหม่บันทึกเข้าไป
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter
    counter += 1
    users.push(user);
    res.json({
        message: 'Create new user successfully',
        user: user
    });
})

//path: PUT /user/:id ใช้สำหรับแก้ไขข้อมูล user ที่มี id ตามที่ระบุ
app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    //หาusers จาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id)

    //แก้ไขข้อมูล user
    if (updateUser.firstname0) {
        users[selectedIndex].firstname = updateUser.firstname
    }
    if (updateUser.lastname) {
        users[selectedIndex].lastname = updateUser.lastname
    }

    users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname
    users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname

    res.json({
        message: 'Update user successfully',
        data: {
            user: updateUser,
            indexUpdate: selectedIndex
        }
    })
})

//path: DELETE /user/:id ใช้สำหรับลบข้อมูล user ที่มี id ตามที่ระบุ
app.delete('/user/:id', (req, res) => {
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