import React, { useEffect, useState } from 'react';
import SanPhamApi from '~/api/SanPhamApi';
import { Card, Button } from 'react-bootstrap';

// Sử dụng đường dẫn tương đối đến thư mục images
const Home = () => {
    const [dsSanPham, setDsSanPham] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await SanPhamApi.getList();
                console.log('Kết quả trả về từ API:', res);
                setDsSanPham(res.items); //  Chỉ lấy mảng sản phẩm
            } catch (err) {
                console.error('Lỗi khi lấy danh sách sản phẩm:', err);
            }
        };

        fetchData();
    }, []);

    // Đặt đường dẫn tĩnh cho thư mục ảnh
    const baseImagePath = require.context('../../assets/images', false, /\.(jpg|jpeg|png)$/);

    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <div className="d-flex flex-wrap gap-4">
                {dsSanPham.map((sp) => {
                    // Sử dụng ảnh mặc định nếu không có ảnh
                    const imageSrc = sp.anhSp
                        ? baseImagePath(`./${sp.anhSp}.jpg`) // Thêm phần mở rộng ảnh nếu cần
                        : 'default-image.jpg'; // ảnh mặc định khi không có ảnh

                    return (
                        <Card style={{ width: '12rem' }} key={sp.maSanPham}>
                            <Card.Img variant="top" src={imageSrc} />
                            <Card.Body>
                                <Card.Title>{sp.tenSanPham}</Card.Title>
                                <Card.Text>{sp.moTaSp}</Card.Text>
                                <Card.Text>{sp.giaSanPham} đ</Card.Text>
                                <Button variant="primary">Xem chi tiết</Button>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
