window.addEventListener('load', () => {
    // Store ID to store name mapping
    const storeMapping = {
        A1: 'Abercrombie & Fitch',
        A2: 'Adidas',
        A3: 'Aerie',
        A4: 'Aesop',
        A5: 'Aldo',
        A6: 'AllSaints',
        A7: 'Alo Yoga',
        A8: 'American Eagle Outfitters',
        A9: 'Apple',
        A10: 'Arc\'teryx',
        A11: 'Aritzia',
        A12: 'Athleta',
        A13: 'Aveda',
        B1: 'B2',
        B2: 'Babaton',
        B3: 'Bailey Nelson',
        B4: 'Banana Republic',
        B5: 'Bath & Body Works',
        B6: 'Bentley',
        B7: 'Best Buy',
        B8: 'Bikini Village',
        B9: 'Bluenotes',
        C1: 'Call It Spring',
        C2: 'Canada Goose',
        C3: 'Canadian Tire',
        C6: 'Club Monaco',
        C7: 'Coach',
        D1: 'DAVIDsTEA',
        D2: 'Dollarama',
        D3: 'Dynamite',
        E1: 'Eataly',
        E2: 'ECCO',
        E3: 'Ever New',
        F1: 'Foot Locker',
        F4: 'Frank & Oak',
        F5: 'FYE',
        G1: 'GameStop',
        G2: 'Garage',
        G3: 'Geox',
        G4: 'GNC',
        H1: 'H&M',
        H4: 'Herschel',
        H5: 'Hoka',
        H6: 'Hollister',
        H7: 'HomeSense',
        H9: 'Hot Topic',
        H10: 'Hudson\'s Bay',
        H11: 'Hugo Boss',
        I1: 'IKEA',
        I2: 'Indigo',
        J1: 'Jack & Jones',
        J2: 'Jo Malone',
        K1: 'Kate Spade',
        K2: 'Kiehl\'s',
        L2: 'L\'Occitane',
        L3: 'La Senza',
        L4: 'La Vie en Rose',
        L5: 'Laco Sac',
        L6: 'Lacoste',
        L7: 'Laderach',
        L8: 'Laline',
        L10: 'Levi\'s',
        L11: 'Lids',
        L12: 'Lindt',
        L13: 'Little Burgundy',
        L14: 'Loblaws',
        L15: 'Lululemon',
        L16: 'Lush',
        M1: 'MAC',
        M3: 'Mango',
        M6: 'Michael Kors',
        N1: 'Nike',
        N2: 'Nespresso',
        R1: 'Ray-Ban',
        R2: 'Reitmans',
        R3: 'Roots',
        S1: 'Saje',
        S4: 'Sephora',
        S5: 'Shoppers Drug Mart',
    };

    function updateHiddenFieldWithStoreNames() {
        const params = new URLSearchParams(window.location.search);
        const selectedIds = Array.from(params.keys());
        const selectedStoreNames = selectedIds.map(id => storeMapping[id]).filter(Boolean);

        const hiddenField = document.getElementById('selected-stores');
        if (hiddenField) {
            hiddenField.value = selectedStoreNames.join(', ');

            // Debugging: Log the hidden field value
            console.log('Hidden Field Value:', hiddenField.value);
        }
    }

    updateHiddenFieldWithStoreNames();
});
