// JavaScript Document

var globaloptions = {
    AcerAspireE1: [
		"Acer Aspire E1-572",
        "£399.00",
        "Windows 8.1",
        "380 x 27 x 255",
		"2.193",
		"2.47",
		"Intel Core i5-4200U",
		"1.6",
		"4",
		"Spinning HD 5400",
		"500"   
    ],
	AcerAspireS3: [
		"Acer Aspire S3-392G",
		"£899.99",
        "Windows 8.1",
        "221 x 17 x 124",
		"1.618",
		"1.97",
		"Intel Core i5-4200U",
		"1.6",
		"4",
		"Spinning HD 5400",
		"500"   
	],
	AcerAspireV5: [
		"Acer Aspire V5-573",
		"£599.95",
        "Windows 8.1",
        "377 x 23 x 255",
		"2.045",
		"2.46",
		"Intel Core i7-4500U",
		"1.8",
		"8",
		"Spinning HD 5400",
		"1000"   
	],
	AcerV5: [
		"Acer V5-552",
		"£479.99",
        "Windows 8.0",
        "378 x 24 x 254",
		"2",
		"2.41",
		"AMD A10-5757M",
		"2.1",
		"6",
		"Spinning HD 5400",
		"1000"   
	],
	MacBookAir11: [
		"Apple MacBook Air 11-inch",
		"£585.00",
        "OSX 10.8.4",
        "299 x 13.4 x 192",
		"1.079",
		"1.39",
		"Intel Core i5-4250U",
		"1.3",
		"4",
		"SSD",
		"128"   
	],
	MacBookAir13: [
		"Apple MacBook Air 13-inch",
		"£669.99",
        "OSX 10.8.4",
        "325 x 12.6 x 227",
		"1.328",
		"1.64",
		"Intel Core i5-4250U",
		"1.3",
		"4",
		"SSD",
		"128"   
	],
	MacbookProRetina13: [
		"Apple Macbook Pro Retina 13-inch",
		"£856.99",
        "Mac OSX 10.8.4",
        "314 x 17.8 x 219",
		"1.566",
		"1.94",
		"Intel Core i5-4258U",
		"2.4",
		"4",
		"SSD",
		"128"   
	],
	selected: [
	] 
    
};
$(document).ready(function(){
    $("#compare_1").change(function(){
        var selectedClass = $(this).find("option:selected").attr("class");    
        var options = globaloptions[selectedClass];
        var newoptions = "";
        for(var i = 0; i < options.length; i++){
            newoptions+="<option>"+ options[i] +"</option>";                            
        }
        $("#result_1").html(newoptions).css("display", "block");
		$(".result_header").css("display", "block");
    });
	
	$("#compare_2").change(function(){
        var selectedClass = $(this).find("option:selected").attr("class");    
        var options = globaloptions[selectedClass];
        var newoptions = "";
        for(var i = 0; i < options.length; i++){
            newoptions+="<option>"+ options[i] +"</option>";                            
        }
        $("#result_2").html(newoptions).css("display", "block");
		$(".result_header").css("display", "block");
    });    
	
	
	$("#compare_3").change(function(){
        var selectedClass = $(this).find("option:selected").attr("class");    
        var options = globaloptions[selectedClass];
        var newoptions = "";
        for(var i = 0; i < options.length; i++){
            newoptions+="<option>"+ options[i] +"</option>";                            
        }
        $("#result_3").html(newoptions).css("display", "block");
		$(".result_header").css("display", "block");
    });
	

});

