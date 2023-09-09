const Account = [
    {
        email: 'phamduylong1742000@gmail.com',
        phone: '0366310650',
        password: '123456'
    },
    {
        email: 'jessi@gmail.com',
        phone: '0773626125',
        password: '123456'
    }
]

const Countries = [
    {
        id: 1,
        name: 'Viet Nam'
    }
]

const Regions = [
    {
        id: 1,
        countryId: 1,
        name: 'Northern'
    },
    {
        id: 2,
        countryId: 1,
        name: 'Central'
    },
    {
        id: 3,
        countryId: 1,
        name: 'Southern'
    }
]

const Fields = [
    {
        id: 1,
        regionId: 1,
        name: 'Ha Noi',
        acreage: 1000
    },
    {
        id: 2,
        regionId: 1,
        name: 'Hai Phong',
        acreage: 1000
    },
    {
        id: 3,
        regionId: 2,
        name: 'Hue',
        acreage: 1000
    },
    {
        id: 4,
        regionId: 3,
        name: 'Ho Chi Minh City',
        acreage: 1000
    },
    {
        id: 5,
        regionId: 3,
        name: 'Binh Duong',
        acreage: 1000
    }
]

const Plans = [
    {
        id: 1,
        fieldId: 1,
        name: 'Expand the scale',
        description: 'Expand the area. Plant more trees. And hire more labor to increase productivity. Order more robotic to control production',
        startDate: { day: 9, month: 8, year: 2023 }
    },
    {
        id: 2,
        fieldId: 2,
        name: 'Expand the scale',
        description: 'Expand the area. Plant more trees. And hire more labor to increase productivity. Order more robotic to control production',
        startDate: { day: 9, month: 8, year: 2023 }
    }
]

const ListTrees = [
    {
        id: 'ABC123',
        fieldId: 1,
        longevity: 723,
        perimeter: 43.96,
        heightFromRootToTop: 3.2,
        heightFromRootToCanopy: 2.3
    },
    {
        id: 'DEF456',
        fieldId: 1,
        longevity: 633,
        perimeter: 43.96,
        heightFromRootToTop: 5.2,
        heightFromRootToCanopy: 3.3
    },
    {
        id: 'ABD356',
        fieldId: 2,
        longevity: 659,
        perimeter: 43.96,
        heightFromRootToTop: 5.2,
        heightFromRootToCanopy: 3.3
    },
    {
        id: 'DGE759',
        fieldId: 2,
        longevity: 695,
        perimeter: 43.96,
        heightFromRootToTop: 5.2,
        heightFromRootToCanopy: 3.3
    },
    {
        id: 'ACE865',
        fieldId: 3,
        longevity: 718,
        perimeter: 43.96,
        heightFromRootToTop: 5.2,
        heightFromRootToCanopy: 3.3
    },
    {
        id: 'GVA156',
        fieldId: 3,
        longevity: 465,
        perimeter: 43.96,
        heightFromRootToTop: 5.2,
        heightFromRootToCanopy: 3.3
    },
    {
        id: 'ABC125',
        fieldId: 4,
        longevity: 723,
        perimeter: 43.96,
        heightFromRootToTop: 3.2,
        heightFromRootToCanopy: 2.3
    },
    {
        id: 'DEF458',
        fieldId: 4,
        longevity: 633,
        perimeter: 43.96,
        heightFromRootToTop: 5.2,
        heightFromRootToCanopy: 3.3
    },
    {
        id: 'ABD353',
        fieldId: 5,
        longevity: 659,
        perimeter: 43.96,
        heightFromRootToTop: 5.2,
        heightFromRootToCanopy: 3.3
    },
    {
        id: 'DGE751',
        fieldId: 5,
        longevity: 695,
        perimeter: 43.96,
        heightFromRootToTop: 5.2,
        heightFromRootToCanopy: 3.3
    },
    {
        id: 'ACE863',
        longevity: 718,
        fieldId: 1,
        perimeter: 43.96,
        heightFromRootToTop: 5.2,
        heightFromRootToCanopy: 3.3
    },
    {
        id: 'GVA150',
        fieldId: 2,
        longevity: 465,
        perimeter: 43.96,
        heightFromRootToTop: 5.2,
        heightFromRootToCanopy: 3.3
    },
    {
        id: 'ULT101',
        fieldId: 3,
        longevity: 465,
        perimeter: 43.96,
        heightFromRootToTop: 5.2,
        heightFromRootToCanopy: 3.3
    }
]

const Robotics = [
    {
        id: 'RBT001',
        treeFollowing: 'ABC123',
        dateOfInstallation: '02/05/2015',
        averageOutputObtainedOneDay: 0.3,
        averageOutputObtainedOneYear: 98.2,
        averageOperatingOneDay: 4,
        image: 'robot.jpg',
        status: 1
    },
    {
        id: 'RBT002',
        treeFollowing: 'DEF456',
        dateOfInstallation: '02/05/2015',
        averageOutputObtainedOneDay: 0.33,
        averageOutputObtainedOneYear: 95.2,
        averageOperatingOneDay: 4,
        image: 'robot.jpg',
        status: 1
    },
    {
        id: 'RBT003',
        treeFollowing: 'ABD356',
        dateOfInstallation: '02/05/2015',
        averageOutputObtainedOneDay: 0.35,
        averageOutputObtainedOneYear: 96.2,
        averageOperatingOneDay: 4,
        image: 'robot.jpg',
        status: 1
    },
    {
        id: 'RBT004',
        treeFollowing: 'DGE759',
        dateOfInstallation: '02/05/2015',
        averageOutputObtainedOneDay: 0.28,
        averageOutputObtainedOneYear: 82.23,
        averageOperatingOneDay: 4,
        image: 'robot.jpg',
        status: 1
    },
    {
        id: 'RBT005',
        treeFollowing: 'ACE865',
        dateOfInstallation: '02/05/2015',
        averageOutputObtainedOneDay: 0.36,
        averageOutputObtainedOneYear: 97.6,
        averageOperatingOneDay: 4,
        image: 'robot.jpg',
        status: 1
    },
    {
        id: 'RBT006',
        treeFollowing: 'GVA156',
        dateOfInstallation: '02/05/2015',
        averageOutputObtainedOneDay: 0.21,
        averageOutputObtainedOneYear: 75.22,
        averageOperatingOneDay: 4,
        image: 'robot.jpg',
        status: 1
    },
    {
        id: 'RBT007',
        treeFollowing: 'ABC125',
        dateOfInstallation: '02/05/2015',
        averageOutputObtainedOneDay: 0.3,
        averageOutputObtainedOneYear: 98.2,
        averageOperatingOneDay: 4,
        image: 'robot.jpg',
        status: 1
    },
    {
        id: 'RBT008',
        treeFollowing: 'DEF458',
        dateOfInstallation: '02/05/2015',
        averageOutputObtainedOneDay: 0.33,
        averageOutputObtainedOneYear: 95.2,
        averageOperatingOneDay: 4,
        image: 'robot.jpg',
        status: 1
    },
    {
        id: 'RBT009',
        treeFollowing: 'ABD353',
        dateOfInstallation: '02/05/2015',
        averageOutputObtainedOneDay: 0.35,
        averageOutputObtainedOneYear: 96.2,
        averageOperatingOneDay: 4,
        image: 'robot.jpg',
        status: 1
    },
    {
        id: 'RBT010',
        treeFollowing: 'DGE751',
        dateOfInstallation: '02/05/2015',
        averageOutputObtainedOneDay: 0.28,
        averageOutputObtainedOneYear: 82.23,
        averageOperatingOneDay: 4,
        image: 'robot.jpg',
        status: 1
    },
    {
        id: 'RBT011',
        treeFollowing: 'ACE863',
        dateOfInstallation: '02/05/2015',
        averageOutputObtainedOneDay: 0.36,
        averageOutputObtainedOneYear: 97.6,
        averageOperatingOneDay: 4,
        image: 'robot.jpg',
        status: 1
    },
    {
        id: 'RBT012',
        treeFollowing: 'GVA150',
        dateOfInstallation: '02/05/2015',
        averageOutputObtainedOneDay: 0.21,
        averageOutputObtainedOneYear: 75.22,
        averageOperatingOneDay: 4,
        image: 'robot.jpg',
        status: 1
    },
    {
        id: 'RBT013',
        treeFollowing: 'ULT101',
        dateOfInstallation: '02/05/2015',
        averageOutputObtainedOneDay: 0.21,
        averageOutputObtainedOneYear: 75.22,
        averageOperatingOneDay: 4,
        image: 'robot.jpg',
        status: 1
    }
]

export { Countries, Regions, Fields, Plans, Account, ListTrees, Robotics };