export type RegionOption = {
    code: string
    name: string
}

        // 3. Daftar Contoh Wilayah (Example Regions)
        export const regionsList: RegionOption[] = [
            { code: "US-CA", name: "California, USA" },
            { code: "US-NY", name: "New York, USA" },
            { code: "UK-LDN", name: "Greater London, UK" },
            { code: "ID-JK", name: "DKI Jakarta, Indonesia" },
            { code: "AU-NSW", name: "New South Wales, Australia" },
        ]


// FUNGSI INTI: Mengubah nama menjadi ID acak kriptografi
    export const convertNameToUniqueId = (name: any, length = 12) => {
        if (!name.trim()) return '';

        // 1. Format nama: hapus spasi/karakter khusus dan ubah ke huruf kecil
        const cleanName = name
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ''); // hanya menyisakan huruf dan angka

        // 2. Buat string acak yang aman secara kriptografi
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const array = new Uint8Array(length);
        crypto.getRandomValues(array);
        
        let randomStr = '';
        for (let i = 0; i < length; i++) {
        randomStr += chars.charAt(array[i] % chars.length);
        }

        // 3. Gabungkan nama yang sudah bersih dengan string acak
        return `${cleanName}-${randomStr}`;
    };

     // Fungsi pembantu untuk mendapatkan format tanggal saat ini (YYYYMMDD-HHMMSS)
    export const getFormattedDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        return `${year}${month}${day}-${hours}${minutes}${seconds}`;
    };

    // function generateDateUUID(): string {
    //     const timestamp = Date.now().toString(36);
    //     const randomStr = Math.random().toString(36).substring(2, 10);
    //     return `${timestamp}-${randomStr}`; // Memastikan ada nilai yang di-return
    // }

    export function generateDateUUID(): string {
    return window.crypto.randomUUID(); 
    }
