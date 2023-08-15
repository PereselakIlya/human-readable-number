function toReadable(number) {
    var numstr = number.toString();
    var numarr = numstr.split("");
    var digits=["zero","one","two",
                "three","four","five",
                "six","seven","eight",
                "nine"];
    var dozens=["hundred","ten","twenty",
                "thirty","fourty","fifty",
                "sixty","seventy","eighty",
                "ninety"];
    var outnum="";
       for(var i=0;i<numarr.length;++i)
       {
        if(numarr[i]>0&&numarr[i+1]>0&&numarr[i+2]>0)
        {
            outnum+=digits[parseInt(numarr[i], 10)]+" "+dozens[0]+" ";
        }
        else if(numarr[i]>0&&numarr[i+1]==0&&numarr[i+2]>0)
        {
            outnum+=digits[parseInt(numarr[i], 10)]+" "+dozens[0]+" "+"and"+" "+digits[parseInt(numarr[i+2], 10)];
            break;
        }
        else if(numarr[i]>0&&numarr[i+1]>0&&numarr[i+2]==0)
        {
            outnum+=digits[parseInt(numarr[i], 10)]+" "+dozens[0]+" "+"and"+" "+dozens[parseInt(numarr[i+1], 10)];
            break;
        }
        else if(numarr[i]>1&&numarr[i+1]==0)
        {
            outnum+=dozens[parseInt(numarr[i], 10)]+" ";
            break;
        }
        else if(numarr[i]>1&&numarr[i+1]>=0)
        {
            outnum+=dozens[parseInt(numarr[i], 10)]+" "+digits[parseInt(numarr[i+1], 10)];
            break;
        }
        else if(numarr[i]==1&&numarr[i+1]==0)
        {
            outnum+=dozens[1];
            break;
        }
        else if(numarr[i]==1&&numarr[i+1]==1)
        {
            outnum+="eleven";
            break;
        }
        else if(numarr[i]==1&&numarr[i+1]==2)
        {
            outnum+="twelwe";
            break;
        }
        else if(numarr[i]==1&&numarr[i+1]==3)
        {
            outnum+="thirteen";
            break;
        }
        else if(numarr[i]==1&&numarr[i+1]==5)
        {
            outnum+="fifteen";
            break;
        }
        else if(numarr[i]==1&&numarr[i+1]>3)
        {
            outnum+= digits[parseInt(numarr[i+1], 10)]+"teen";
            break;
        }
        else{
        switch(numarr[i]){
            case "0":
                outnum+=digits[0];
            break;
            case "1":
                outnum+=digits[1];
            break;
            case "2":
                outnum+=digits[2];
            break;
            case "3":
                outnum+=digits[3];
            break;
            case "4":
                outnum+=digits[4];
            break;
            case "5":
                outnum+=digits[5];
            break;
            case "6":
                outnum+=digits[6];
            break;
            case "7":
                outnum+=digits[7];
            break;
            case "8":
                outnum+=digits[8];
            break;
            case "9":
                outnum+=digits[9];
            break;
        }
    }
       }
       return outnum; 
  }