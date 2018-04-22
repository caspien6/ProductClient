export interface ITermek {
        id: number;
        nev: string;
        ar: number;
        raktarkeszlet: number;
        kategoriaId: number;
        leiras: string;
        kepUrl: string;
        views: number;
        kategoria?: any;
        kosarTetel: any[];
    }

