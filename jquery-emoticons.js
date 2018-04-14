//<![CDATA[
/*!
 * Simple regex experiment to create an automatic emoticons by Taufik Nurrohman
 * Visit: http://www.dte.web.id
 * Update: 23 August 2012
 */

(function($) {
  $(document).ready(function() {

    // Append an emoticon bar before comment-form
    if (putEmoAbove) {
      $(putEmoAbove).before('<div class="emoWrap"> :) :( =( :waaa: :s ^_^ :D =D ^:D @@, ;) :-bd :-d :yaya: :&#39;( T_T :&#92; :p B) :Q :Ozz 7:( &#92;o/ &#92;m/ **p &lt;3 0:) ^o^ :-a 7:O *fck* xV x@ X@ ~x( &lt;:) &lt;=) (-.-,) *=p =p* &#39;&#39;J :W :bye: :imhere: :cendol: :rolled: *bang* :drummer: :guitarist: :vocalist:</div>');
    }
    function emo(emo, imgRep, emoKey) {
      $(emoRange).html(function() {
        return $(this).html().replace(/<br ?\/?>(:|;|=|\^)/ig, "<br> $1").replace(emo, " <img src='" + imgRep + "' class='emo delayLoad' alt='" + emoKey + "' />");
      });
    }
    emo(/\s:\)+/g, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/smile-1.gif", ":)");
    emo(/\s;\)+/g, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/wink.gif", ";)");
    emo(/\s:\(/g, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/sad.gif", ":(");
    emo(/\s=\(/g, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/sad-2.gif", "=(");
    emo(/\s@@,/g, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/roll-eyes.gif", "@@,");
    emo(/\s:yaya:/ig, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/ya.gif", ":yaya:");
    emo(/\s:s/ig, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/sullen.gif", ":s");
    emo(/\s:\\/g, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/um.gif", ":&#92;");
    emo(/\s:D/g, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/haha.gif", ":D");
    emo(/\s=D/g, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/hihi.gif", "=D");
    emo(/\s\^:D/g, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/above-me-haha.gif", "^:D");
    emo(/\s\^(\_|)\^/g, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/smile-2.gif", "^_^");
    emo(/\s:'\(/g, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/cry.gif", ":&#39;(");
    emo(/\s:waaa:/g, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/wa.gif", ":waaa:");
    emo(/\sT_T/ig, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/tear.gif", "T_T");
    emo(/\sB\)/g, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/cool.gif", "B)");
    emo(/\s:Q/ig, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/smoking.gif", ":Q");
    emo(/\s\*\*p/ig, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/crazy.gif", "**p");
    emo(/\s7:\(/g, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/confuse.gif", "7:(");
    emo(/\s:p/ig, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/we.gif", ":p");
    emo(/\s:Oz+/ig, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/sleep.gif", ":Ozz");
    emo(/\s7:O/ig, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/angry-1.gif", "7:O");
    emo(/\s\\o\//ig, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/applause.gif", "&#92;o/");
    emo(/\s\\m\//ig, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/metal.gif", "&#92;m/");
    emo(/\s&lt;3/ig, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/love.gif", "&amp;amp;lt;3");
    emo(/\s0:\)+/ig, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/angel-green.gif", "0:)");
    emo(/\s\^o\^/ig, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/angel-white.gif", "^o^");
    emo(/\s:-a/ig, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/vomit.gif", ":-a");
    emo(/\s\*fck\*/ig, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/fuck.gif", "*fck*");
    emo(/\sxV/ig, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/shout.gif", "xV");
    emo(/\sx\@/g, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/angry-2.gif", "x@");
    emo(/\s\X\@/g, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/argh.gif", "X@");
    emo(/\s:-d/ig, "https://cdn.rawgit.com/Ankajournal/emo/ffc3ae6b/top-top.gif", ":-d");
    emo(/\s:-bd/ig, "https://cdn.rawgit.com/Ankajournal/emo/75c2db42/top.gif", ":-bd");
    emo(/\s\~x\(+/ig, "https://cdn.rawgit.com/Ankajournal/emo/75c2db42/ugh.gif", "~x(");
    emo(/\s:bye:/ig, "https://cdn.rawgit.com/Ankajournal/emo/75c2db42/bye.gif", ":bye:");
    emo(/\s:W/g, "https://cdn.rawgit.com/Ankajournal/emo/75c2db42/explain.gif", ":W");
    emo(/\s\(-\.-,\)/g, "https://cdn.rawgit.com/Ankajournal/emo/75c2db42/crazy-crazy.gif", "(-.-,)");
    emo(/\s\*=p/ig, "https://cdn.rawgit.com/Ankajournal/emo/75c2db42/playing-1.gif", "*=p");
    emo(/\s=p\*/ig, "https://cdn.rawgit.com/Ankajournal/emo/75c2db42/playing-2.gif", "=p*");
    emo(/\s:imhere:/ig, "https://cdn.rawgit.com/Ankajournal/emo/75c2db42/i-am-here.gif", ":imhere:");
    emo(/\s:cendol:/ig, "https://cdn.rawgit.com/Ankajournal/emo/75c2db42/cendol.gif", ":cendol:");
    emo(/\s&lt;:\)/ig, "https://cdn.rawgit.com/Ankajournal/emo/75c2db42/festival-1.gif", "&amp;amp;lt;:)");
    emo(/\s&lt;=\)/ig, "https://cdn.rawgit.com/Ankajournal/emo/75c2db42/festival-2.gif", "&amp;amp;lt;=)");
    emo(/\s:rolled:/ig, "https://cdn.rawgit.com/Ankajournal/emo/75c2db42/rolled.gif", ":rolled:");
    emo(/\s\*bang\*/ig, "https://cdn.rawgit.com/Ankajournal/emo/75c2db42/bang.gif", "*bang*");
    emo(/\s\'\'J/ig, "https://cdn.rawgit.com/Ankajournal/emo/75c2db42/call.gif", "&#39;&#39;J");
    emo(/\s:drummer:/ig, "https://cdn.rawgit.com/Ankajournal/emo/75c2db42/drum.gif", ":drummer:");
    emo(/\s:guitarist:/ig, "https://cdn.rawgit.com/Ankajournal/emo/75c2db42/guitar.gif", ":guitarist:");
    emo(/\s:vocalist:/ig, "https://cdn.rawgit.com/Ankajournal/emo/75c2db42/vocal.gif", ":vocalist:");

    var one = 0; // Show alert once!

    // Click anywhere to hide the emoticon
    $(document.body).on("click", function() {
      $('.emoKey').remove();
    });

    // Click to show the code!
    $('.emo').css('cursor', 'pointer').on("click", function(e) {
      $('.emoKey').remove();
      $(this).after('<input class="emoKey" type="text" size="6" value=" ' + this.alt + '" />');
      $('.emoKey').trigger("select");
      if(emoMessage && one === 0) {
        alert(emoMessage);
        one = 1;
      }
      e.stopPropagation();
    });

  });
})(jQuery);
//]]>