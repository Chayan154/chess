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

var white_row = [rook_w,knight_w,bishop_w,queen_w,king_w,bishop_w,knight_w,rook_w];
var black_row = [rook_b,knight_b,bishop_b,queen_b,king_b,bishop_b,knight_b,rook_b];
 
var white_pieces = [pawn_w,bishop_w,knight_w,rook_w,queen_w,king_w];
var black_pieces = [pawn_b,bishop_b,knight_b,rook_b,queen_b,king_b];

var piece_sym_white = ["P","B","N","R","Q","K"];
var piece_sym_black = ["p","b","n","r","q","k"];


function matchWhite(str){
    for(let i=0;i<white_pieces.length;i++){
        if(str.includes(white_pieces[i]))
            return 1;
    }
    return 2;
}

function whatPiece(str){
    if (matchWhite(str) == 1){
        for(let i=0;i<white_pieces.length;i++){
            if(str.includes(white_pieces[i]))
                return piece_sym_white[i];
        }
    }
    else {
        for(let j=0;j<white_pieces.length;j++){
            if(str.includes(black_pieces[j]))
                return piece_sym_black[j];
        }
    }
}


$('.row2 div').html("<img src="+pawn_b+"/>");
    $('.row7 div').html("<img src="+pawn_w+"/>");
    for(i=0; i<=7; i++){
        $('.row1 div').eq(i).html("<img src="+black_row[i]+"/>");
        $('.row8 div').eq(i).html("<img src="+white_row[i]+"/>");
    };

$(document).ready(function(){
    $('#loader').css('top','-105vh')
    $('#reset').click(function(){
        $('.row div').empty();
        $('.row2 div').html("<img src="+pawn_b+"/>");
        $('.row7 div').html("<img src="+pawn_w+"/>");
        for(i=0; i<=7; i++){
            $('.row1 div').eq(i).html("<img src="+black_row[i]+"/>");
            $('.row8 div').eq(i).html("<img src="+white_row[i]+"/>");
        };
        nextMove = 1;
        check = true;
    });

    $('#gback').click(function(){
        $("#"+sqrid2).empty();
        $("#"+sqrid1).html(a1)
    });

    var check = true;
    var colour1=0,colour2=0;
    var a1,a2;
    var nextMove = 1;
    var sqrid1,sqrid2;
    for(i=0;i<64;i++){
        $('.row div').eq(i).click(function(){
            if(check){
                a1 = $(this).html();
                sqrid1 = $(this).attr("id");
                if (a1!="" & matchWhite(a1)==nextMove){
                    check = false;
                    sqrid1 = $(this).attr("id");
                    colour1 = matchWhite(a1);
                    $(this).toggleClass("hovereff");
                    if (nextMove==1)
                        nextMove = 2;
                    else
                        nextMove = 1;
                }
            }
            else {
                a2 = $(this).html();
                sqrid2 = $(this).attr("id");
                if (a2!=""){
                    colour2 = matchWhite(a2);
                }
                else{
                    colour2 = 0;
                }

                if(sqrid1 == sqrid2){
                    check = true;
                    $("#"+sqrid1).toggleClass("hovereff");
                }
                
                else if(colour2 != colour1){
                    $(this).html(a1);
                    sqrid2 = $(this).attr("id");
                    check = true;
                    $("#"+sqrid1).empty();
                    $("#"+sqrid1).toggleClass("hovereff");
                }
            }
        });
    }
  
});