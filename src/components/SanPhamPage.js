import React, { useEffect, useState } from 'react';
import SanPhamApi from '~/api/SanPhamApi';

const SanPhamPage = () => {
    const [dsSanPham, setDsSanPham] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await SanPhamApi.getList();
                console.log('Kết quả trả về từ API:', res);
                setDsSanPham(res.items); // 👈 Chỉ lấy mảng sản phẩm
            } catch (err) {
                console.error('Lỗi khi lấy danh sách sản phẩm:', err);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <ul>
                {dsSanPham.map((sp) => (
                    <li key={sp.maSanPham}>
                        {sp.tenSanPham} - {sp.giaSanPham}đ
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SanPhamPage;
