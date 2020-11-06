///////////////////////////////////////////////////////////////////////////////////////////////
//////////                              Kala's Contribution codes                  ////////////
///////////////////////////////////////////////////////////////////////////////////////////////

class Vector {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
    }

    mul(c) {
        this.x *= c;
        this.y *= c;
    }

    copy() {
        return new Vector(this.x, this.y);
    }

}

class ChessChecks {
    static checkBishop(src, targ) {
        let diff_x = Math.abs(src.x - targ.x);
        let diff_y = Math.abs(src.y - targ.y);

        return diff_x == diff_y;
    }

    static checkRook(src, targ) {
        return (src.x == targ.x && src.y != targ.y) || (src.x != targ.x && src.y == targ.y);
    }

    static checkKing(src, targ) {
        let disX = Math.abs(src.x - targ.x);
        let disY = Math.abs(src.y - targ.y);

        return (disX <= 1 && disY <= 1);
    }

    static checkQueen(src, targ) {
        return this.checkRook(src, targ) || this.checkBishop(src, targ);
    }

    static checkKnight(src, targ) {
        let dx = Math.abs(src.x - targ.x);
        let dy = Math.abs(src.y - targ.y);

        return (dx == 1 && dy == 2) || (dx == 2 && dy == 1);
    }

}

function to_vector(str) {

    let dct = ['a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h'];

    // separate the file and rank 
    let file = str[0].toLowerCase();
    let rank = Number(str[1]);

    // extract the corresponding letter 
    let x = dct.indexOf(file);

    if (x == -1) {
        return null;
    }

    return new Vector(x + 1, rank);
}
function to_chess_notation(vector) {

    let dct = ['a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h'];

    if (vector.x < 1 || vector.x > 8 || vector.y < 0 || vector.y > 8) {
        return null;
    }
    let file = dct[vector.x - 1].toUpperCase();
    let rank = vector.y;

    return file + rank;
}

///////////////////////////////////////////////////////////////////////////////////////////////
//////////                               AREA 51                                   ////////////
///////////////////////////////////////////////////////////////////////////////////////////////



var pawn_w = "https://tinyurl.com/y4let99z";
var pawn_b = "https://tinyurl.com/yx9eurm2";
var bishop_w = "https://tinyurl.com/yy7jj5ky";
var bishop_b = "https://tinyurl.com/y2rr7tsg";
var knight_w = "https://tinyurl.com/y699gbh4";
var knight_b = "https://tinyurl.com/y5jrzyao";
var rook_w = "https://tinyurl.com/y4fpnkmr";
var rook_b = "https://tinyurl.com/y54b8p4f";
var queen_w = "https://tinyurl.com/y49nm257";
var queen_b = "https://tinyurl.com/y3zw96oc";
var king_w = "https://tinyurl.com/y5uettdg";
var king_b = "https://tinyurl.com/y2fcudgg";

var white_row = [rook_w, knight_w, bishop_w, queen_w, king_w, bishop_w, knight_w, rook_w];
var black_row = [rook_b, knight_b, bishop_b, queen_b, king_b, bishop_b, knight_b, rook_b];

var white_pieces = [pawn_w, bishop_w, knight_w, rook_w, queen_w, king_w];
var black_pieces = [pawn_b, bishop_b, knight_b, rook_b, queen_b, king_b];

var piece_sym_white = ["P", "B", "N", "R", "Q", "K"];
var piece_sym_black = ["p", "b", "n", "r", "q", "k"];




//Chess functions

function matchWhite(str) {
    for (let i = 0; i < white_pieces.length; i++) {
        if (str.includes(white_pieces[i]))
            return 1;
    }
    return 2;
}

function whatPiece(str) {
    if (matchWhite(str) == 1) {
        for (let i = 0; i < white_pieces.length; i++) {
            if (str.includes(white_pieces[i]))
                return piece_sym_white[i];
        }
    }
    else {
        for (let j = 0; j < white_pieces.length; j++) {
            if (str.includes(black_pieces[j]))
                return piece_sym_black[j];
        }
    }
}

//Valid move check function
function checkMove(peice, curr, targ) {

    let vcurr = to_vector(curr);
    let vtarg = to_vector(targ);

    if (peice == 'P') {
        let dx = Math.abs(vcurr.x - vtarg.x);
        let dy = vtarg.y - vcurr.y;
        return (dy == 2 || dy == 1) && (dx <= 1);
    }
    else if (peice == 'p') {
        let dx = Math.abs(vcurr.x - vtarg.x);
        let dy = vtarg.y - vcurr.y;
        return (dy == -2 || dy == -1) && (dx <= 1);
    }
    else if (peice == 'B' || peice == 'b') {
        return ChessChecks.checkBishop(vcurr, vtarg);
    }
    else if (peice == 'N' || peice == 'n') {
        return ChessChecks.checkKnight(vcurr, vtarg);
    }
    else if (peice == 'R' || peice == 'r') {
        return ChessChecks.checkRook(vcurr, vtarg);
    }
    else if (peice == 'Q' || peice == 'q') {
        return ChessChecks.checkQueen(vcurr, vtarg);
    }
    else if (peice == 'K' || peice == 'k') {
        return ChessChecks.checkKing(vcurr, vtarg);
    }
    else {
        console.log("Invalid arguments");
        return null;
    }
}


// Main jquery and DOM manipulation code

$('.row2 div').html("<img src=" + pawn_b + "/>");
$('.row7 div').html("<img src=" + pawn_w + "/>");
for (i = 0; i <= 7; i++) {
    $('.row1 div').eq(i).html("<img src=" + black_row[i] + "/>");
    $('.row8 div').eq(i).html("<img src=" + white_row[i] + "/>");
};

$(document).ready(function () {
    $('#loader').css('top', '-105vh')
    $('#reset').click(function () {
        $('.row div').empty();
        $('.row2 div').html("<img src=" + pawn_b + "/>");
        $('.row7 div').html("<img src=" + pawn_w + "/>");
        for (i = 0; i <= 7; i++) {
            $('.row1 div').eq(i).html("<img src=" + black_row[i] + "/>");
            $('.row8 div').eq(i).html("<img src=" + white_row[i] + "/>");
        };
        nextMove = 1;
        check = true;
    });

    $('#gback').click(function () {
        $("#" + sqrid2).empty();
        $("#" + sqrid1).html(a1);
        if (nextMove == 1)
            nextMove = 2;
        else
            nextMove = 1;

    });

    var check = true;
    var colour1 = 0, colour2 = 0;
    var a1, a2;
    var currPeice;
    var nextMove = 1;
    var sqrid1, sqrid2;
    for (i = 0; i < 64; i++) {
        $('.row div').eq(i).click(function () {
            if (check) {
                a1 = $(this).html();
                sqrid1 = $(this).attr("id");
                currPeice = whatPiece(a1);
                if (a1 != "" & matchWhite(a1) == nextMove) {
                    check = false;
                    sqrid1 = $(this).attr("id");
                    colour1 = matchWhite(a1);
                    $(this).toggleClass("hovereff");

                }
            }
            else {
                a2 = $(this).html();
                sqrid2 = $(this).attr("id");
                if (a2 != "") {
                    colour2 = matchWhite(a2);
                }
                else {
                    colour2 = 0;
                }

                if (sqrid1 == sqrid2) {
                    check = true;
                    $("#" + sqrid1).toggleClass("hovereff");
                }
                else if (colour2 != colour1 && checkMove(currPeice, sqrid1, sqrid2)) {
                    $(this).html(a1);
                    sqrid2 = $(this).attr("id");
                    check = true;
                    $("#" + sqrid1).empty();
                    $("#" + sqrid1).toggleClass("hovereff");
                    if (nextMove == 1)
                        nextMove = 2;
                    else
                        nextMove = 1;
                }
                
            }
        });
    }

});