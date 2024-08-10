var server_filter = [
    /*n0*/ 'الكل',
    /*n1*/ 'التنمية البشرية وتطوير الذات',
    /*n2*/ 'علم النفس',
    /*n3*/ 'الروايات',
    /*n4*/ 'المصاحيف',
    /*n5*/ 'العلوم الاسلامية',
    /*n6*/ 'التاريخ والحضارات',
]
var server_books = {}
var img_load = "https://drive.google.com/thumbnail?id="

// n1
server_books[1] = [
    /*n1*/ [
        /*img*/  img_load + '1C-D2dApVTTfBrY3D2tQf7Esq7xAlsT67&sz=w500-h735' ,
        /*name*/ 'كتاب كيف تؤثر على الآخرين وتكتسب الأصدقاء',
        /*have*/ 'ديل كارنيجي',
        /*page*/ 'books/كتاب_كيف_تؤثر_على_الآخرين_وتكتسب_الأصدقاء.html'
    ] ,
    /*n2*/ [
        /*img*/  img_load + '1DxpifjKUCOKwrML2sFRg75JNSYdKyAbK&sz=w500-h735' ,
        /*name*/ 'كتاب شجاعة أن تكون غير محبوب',
        /*have*/ 'مجموعة مؤلفين',
        /*page*/ 'books/كتاب_شجاعة_أن_تكون_غير_محبوب.html'
    ] ,
    /*n3*/ [
        /*img*/  img_load + '1G2rvPzXlfRj6CHKK_sSgezpsP3PuWMpW&sz=w452-h678' ,
        /*name*/ 'كتاب خذها بقوة',
        /*have*/ 'حسام عبد العزيز',
        /*page*/ 'books/كتاب_خذها_بقوة.html'
    ] ,
]
// n2
server_books[2] = [
    /*n1*/ [
        /*img*/  img_load + '1IMLxSPpx17Sr7dxLmG4Xko9bGiXgxhd0&sz=w307-h455' ,
        /*name*/ 'كتاب علم النفس الأسود',
        /*have*/ 'د. محمد عبد العال',
        /*page*/ 'books/كتاب_علم_النفس_الأسود.html'
    ] ,
]
// n3
server_books[3] = [
    /*n1*/ [
        /*img*/  img_load + '1JF8PYiYYAWMzzbOoTWbamcxK_GUGXQYX&sz=w679-h1000' ,
        /*name*/ 'رواية أحدب نوتردام',
        /*have*/ 'فيكتور هيجو',
        /*page*/ 'books/رواية_أحدب_نوتردام.html'
    ] ,
]
// n4
server_books[4] = [
    /*n1*/ [
        /*img*/  img_load + '1O--SvTyTBdV-cn3tmCV3wFpXOchkxvy9&sz=w453-h676' ,
        /*name*/ 'القرآن الكريم',
        /*have*/ 'كلام الله',
        /*page*/ 'books/القرآن_الكريم.html'
    ] ,
]
// n5
server_books[5] = [

]
// n6
server_books[6] = [

]
// n0
server_books[0] = [
    server_books[4][0] , /*القرآن الكريم*/
    server_books[1][1] , /*كتاب شجاعة أن تكون غير محبوب*/
    server_books[1][2] , /*كتاب خذها بقوة*/
    server_books[1][0] , /*كتاب كيف تؤثر على الآخرين وتكتسب الأصدقاء*/ 
    server_books[2][0] , /*كتاب علم النفس الأسود*/
    server_books[3][0] , /*رواية أحدب نوتردام*/
    
]
