let productsList = [
  {
    productTitle: 'Βασιλικό αυτί',
    productDesc:
      'Πλούσιος ζωμός ψαριού με κρέμα, φιλέτο σολομού και μπακαλιάρο Ατλαντικού,' +
      ' πατάτες, καρότα και κρεμμύδια',
    productPrice: 53 / 5,
    image: require('../assets/s2.jpg'),
  },
  {
    productTitle: 'Κοτόσουπα με σπιτικά νουντλς',
    productDesc:
      'Πλούσιος ζωμός κοτόπουλου με σπιτικά νουντλς αυγών, κοτόπουλο, αυγό και φρέσκο ​​σπανάκι',
    productPrice: 28 / 5,
    image: require('../assets/s3.jpg'),
  },
  {
    productTitle: 'Μπορς με κρουτόν',
    productDesc:
      'Χορταστικό μπορς με ζωμό βοδινού. Σερβίρεται με κρέμα γάλακτος και κρουτόν σκόρδου. ',
    productPrice: 53 / 5,
    image: require('../assets/s4.jpg'),
  },
  {
    productTitle: 'Σπιτική Solyanka',
    productDesc:
      'Ένα χορταστικό κουκούτσι σύμφωνα με την παλιά συνταγή της γιαγιάς του Dariko.',
    productPrice: 54 / 5,
    image: require('../assets/s5.jpg'),
  },
  {
    productTitle: 'Tiger Shrimp Chakhokhbili',
    productDesc:
      'Κοκκινιστές γαρίδες τίγρης σε σάλτσα ντομάτας με ντομάτες, σκόρδο, γεωργιανά μπαχαρικά, πιπεριές τσίλι και φρέσκο ​​κόλιανδρο',
    productPrice: 730 / 5,
    image: require('../assets/g1.jpg'),
  },
  {
    productTitle: 'Γαρίδες τίγρης σε σάλτσα Chkmeruli',
    productDesc:
      'Τριφικές γαρίδες τίγρης μαγειρεμένες σε γεωργιανή σάλτσα Chkmeruli από κρέμα, τυρί, σκόρδο, φρέσκο ​​δυόσμο και κόλιανδρο',
    productPrice: 85 / 5,
    image: require('../assets/g2.jpg'),
  },
  {
    productTitle: 'Μπακαλιάρος με λαχανικά',
    productDesc:
      'Μπακαλιάρος Ατλαντικού φούρνου με κουνουπίδι, κολοκυθάκια και ντομάτες με σάλτσα τυριού κρέμα',
    productPrice: 73 / 5,
    image: require('../assets/g3.jpg'),
  },
  {
    productTitle: 'Χακονδρίλι με κοτόπουλο',
    productDesc:
      'Φιλέτο μπούτι κοτόπουλου τηγανισμένο στη σχάρα και ψητό σε κρεμώδη σάλτσα τυριού με μανιτάρια και κρεμμύδια',
    productPrice: 62 / 5,
    image: require('../assets/g4.jpg'),
  },
  {
    productTitle: 'Μοσχάρι Στρογκάνοφ',
    productDesc:
      'Μοσχάρι με μανιτάρια σε πηχτή κρεμώδη σάλτσα τυριού, με πουρέ πατάτας. ',
    productPrice: 85 / 5,
    image: require('../assets/g5.jpg'),
  },
  {
    productTitle: 'Khinkali Kalakuri',
    productDesc: 'Με μοσχάρι και χοιρινό.',
    productPrice: 33 / 5,
    image: require('../assets/h1.jpg'),
  },
  {
    productTitle: 'Καλακούρι τηγανητό Χινκάλι',
    productDesc: 'Με μοσχάρι και χοιρινό.',
    productPrice: 43 / 5,
    image: require('../assets/h2.jpg'),
  },
  {
    productTitle: 'Rack of Lamb',
    productDesc:
      'Ορεκτικά παϊδάκια αρνιού τηγανισμένα σε ζωντανή φωτιά σε επώνυμα μπαχαρικά.',
    productPrice: 78 / 5,
    image: require('../assets/h3.jpg'),
  },
  {
    productTitle: 'Γαρίδες στη σχάρα',
    productDesc:
      'Γαρίδες μαριναρισμένες σε αρωματικό μαγκάλ. Σερβίρουμε με σαλάτα με φύλλα ρόκας. ',
    productPrice: 53 / 5,
    image: require('../assets/h4.jpg'),
  },
  {
    productTitle: 'Λιούλια-κεμπάπ σε λάβας με κοτόπουλο. και μοσχαρίσιο κρέας.',
    productDesc:
      'Μαγειρεμένο σε ζωντανά κάρβουνα και τυλιγμένο σε πίτα με τυρί Suluguni και κρεμμύδια. Με σάλτσα Τσαχτών. ',
    productPrice: 63 / 5,
    image: require('../assets/h5.jpg'),
  },
  {
    productTitle: 'Λιούλα-κεμπάπ σε λάβας με μοσχαράκι. και γουρούνι.',
    productDesc:
      'Με τυρί Suluguni και κρεμμύδια. Σερβίρουμε με σάλτσα σατσεμπέλι. ',
    productPrice: 52 / 5,
    image: require('../assets/h6.jpg'),
  },
  {
    productTitle: 'Αρνί Λούλα Κεμπάπ',
    productDesc:
      'Κρεμώδης σούπα με χέλι, φύκια wakame, ρύζι. Γαρνίρεται με φρέσκα κρεμμυδάκια και σουσάμι.',
    productPrice: 68 / 5,
    image: require('../assets/h7.jpg'),
  },
  {
    productTitle: 'Beef Lula Kebab',
    productDesc:
      'Μοσχάρι κεμπάπ με καυκάσια μπαχαρικά, λεπτή λάβας και κρεμμύδι. ',
    productPrice: 47 / 5,
    image: require('../assets/h8.jpg'),
  },
  {
    productTitle: 'Σκουμπρί στη σχάρα',
    productDesc:
      'Χρυσό καπνιστό ψάρι με μπαχαρικά, ψητές πατάτες και γεωργιανή σάλτσα Ματσόνι.',
    productPrice: 92 / 5,
    image: require('../assets/h9.jpg'),
  },
  {
    productTitle: 'Κουφτά από μοσχαρίσιο κρέας στη σχάρα',
    productDesc:
      'Ανατολίτικο πιάτο σε μορφή κοτολέτας μαγειρεμένα στη σχάρα από κιμά γεμιστό με τυρί' +
      'Suluguni. Σερβίρεται με χρυσαφένιες πατάτες, ντομάτες και σάλτσα Satsibeli',
    productPrice: 97 / 5,
    image: require('../assets/h10.jpg'),
  },
  {
    productTitle: 'Γαρνίρουμε Πλιγούρι με Λαχανικά',
    productDesc: 'Πλιγούρι τηγανητό με καρότα, πιπεριές και κρεμμύδια',
    productPrice: 23 / 5,
    image: require('../assets/v1.jpg'),
  },
  {
    productTitle: 'Φαγόπυρο με μανιτάρια',
    productDesc: 'Φαγόπυρο με τηγανητά μανιτάρια',
    productPrice: 33 / 5,
    image: require('../assets/v2.jpg'),
  },
  {
    productTitle: 'Διακοσμήστε το Achuchuk',
    productDesc: 'Ώριμες ντομάτες, φρέσκα αγγούρια, κρεμμύδια και ντρέσινγκ',
    productPrice: 13 / 5,
    image: require('../assets/v3.jpg'),
  },
  {
    productTitle: 'Πατάτες Shepherds',
    productDesc: 'Με σκόρδο και πάπρικα.',
    productPrice: 15 / 5,
    image: require('../assets/v4.jpg'),
  },
  {
    productTitle: 'Lagman Tom Yum',
    productDesc:
      'Αρωματικός ζωμός Tom Yum με γαρίδες τίγρης, μπλε μύδια, φιλέτο κοτόπουλου, σπιτικά' +
      ' νουντλς Lagman, φρέσκο ​​τζίντζερ, λεμονόχορτο, τσίλι',
    productPrice: 56 / 5,
    image: require('../assets/s1.jpg'),
  },
  {
    productTitle: 'Τηγανιτό κουνουπίδι',
    productDesc:
      'Κουνουπίδι τηγανητό σε τριμμένη φρυγανιά. Σερβίρεται με σάλτσα καρυδιού bage',
    productPrice: 24 / 5,
    image: require('../assets/v5.jpg'),
  },
];

productsList = productsList.map(el => {
  return {
    ...el,
    added: false,
    count: 1,
    id: Math.random(),
  };
});

export default productsList;
