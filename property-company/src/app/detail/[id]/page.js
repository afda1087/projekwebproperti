"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '../../lib/supabase'; // Memanggil jembatan Supabase

export default function AdminDashboard() {
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Saat halaman admin dibuka, langsung ambil data dari database
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setIsLoading(true);
        // Nanti ini akan menarik data dari tabel bernama 'properties' di Supabase
        // Karena tabelnya belum kamu buat, ini saya siapkan kodenya dalam bentuk komentar dulu:
        
        /* 
        const { data, error } = await supabase.from('properties').select('*');
        if (error) console.log("Gagal ambil data:", error);
        if (data) setProperties(data);
        */
        
        setIsLoading(false);
    };

    return (