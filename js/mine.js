$(document).ready(function()
{
    let wScroll = $(window).scrollTop();
    let offset = $(".About").offset().top;
    
    if(wScroll>=offset)
    {
        $(".navbar").css("backgroundColor","white") ;
        $(".navbar").css("padding","20px")
    }

    else 
    {
        $(".navbar").css("backgroundColor","transparent") ;
        $(".navbar").css("padding","5px")
    }

    $(window).scroll(function()
    {
        let wScroll = $(window).scrollTop();
        let offset = $(".About").offset().top;
        
        if(wScroll>=offset)
        {
            $(".navbar").css("backgroundColor","white") ;
            $(".navbar").css("padding","20px")
        }

        else 
        {
            $(".navbar").css("backgroundColor","transparent") ;
            $(".navbar").css("padding","5px")
        }

    })

    $(".nav-link").click(function()
    {
        let myhref = $(this).attr("href")
        
        let hrefOffset = $(`${myhref}`).offset().top;

        $("body,html").animate({scrollTop:`${hrefOffset}`},1000)
        
    })



    $(window).scroll(function()

    {
        let wScroll = $(window).scrollTop();
        let offset = $(".About").offset().top;

        if(wScroll>=offset)
        {
            $(".btn-mine").fadeIn(500)
        }

        else
        {
            $(".btn-mine").fadeOut(500)
        }

    })

    $(".btn-mine").click(function()
    {
        $("body,html").animate({scrollTop:"0"},1000)
    })


    $(".loading").fadeOut(1000 , function()
    {
        $("body").css("overflow","auto")
    })
    
})


