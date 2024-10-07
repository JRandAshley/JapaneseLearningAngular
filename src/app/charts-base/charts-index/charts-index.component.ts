import { Component } from '@angular/core';

@Component({
  selector: 'app-charts-index',
  templateUrl: './charts-index.component.html',
  styleUrl: './charts-index.component.scss'
})
export class ChartsIndexComponent {
  showTermsAndPhrases: boolean = false;
  showVerbConjugation: boolean = true;
  showNumbers: boolean = false;

  verbBaseH1: string = "";
  verbBaseDetails: string = "";

  showBaseInfo(ConjugationCode: string) {
    if(ConjugationCode === "Godan"){
      this.verbBaseH1 = "Godan Verbs"
      this.verbBaseDetails = "Most Japanese verbs are Godan (五段) verbs. These verbs always conjugate the same way with only one exception. These verbs have five changes that follow the order of the Japanese vowels (i.e. the characters for that section of the hiragana chart), hence the name Godan (meaning 5 levels or steps), and then the \"te\" and \"ta\" forms that are common to all verbs."
    }
    if(ConjugationCode === "Ichidan"){
      this.verbBaseH1 = "Ichidan Verbs"
      this.verbBaseDetails = "A verb is usually an Ichidan verb if it ends with the sound \"iru\" or \"eru\". Ichidan verbs also follow a simple conjugation pattern that is somewhat similar to that of the Godan verbs."
    }
    if(ConjugationCode === "Suru"){
      this.verbBaseH1 = "Suru"
      this.verbBaseDetails = "Many nouns can be used as a verb simply by putting \"suru\" right after them. It is probably the most used of all Japanese verbs. The functions for these bases are the same as for the Godan verbs except that Base 4 can only be used as the \"if verb\". The rude command form is shiro."
    }
    if(ConjugationCode === "Kuru"){
      this.verbBaseH1 = "Kuru"
      this.verbBaseDetails = "The functions for these bases are the same as for the Godan verbs except that Base 4 can only be used as the \"if verb\". The rude command form is koi and really should only be used on animals."
    }
    if(ConjugationCode === "GB1"){
      this.verbBaseH1 = "Godan Base 1";
      this.verbBaseDetails = "Base 1 can not be used by itself but becomes the plain form negative simply by adding -nai. (ex. hanasanai - I won't say anything.) If the verb ends in う (u) then the end for Base 1 becomes わ (wa). (ex. au (Base 1) -> awa) (Plain form is what people use when talking to a friend. It would not be proper to use in a business environment.)";
    }
    if(ConjugationCode === "GB2"){
      this.verbBaseH1 = "Godan Base 2";
      this.verbBaseDetails = "Base 2 is, in most cases, a noun when used by itself but is primarily used with the polite form of the verb.";
    }
    if(ConjugationCode === "GB3"){
      this.verbBaseH1 = "Godan Base 3";
      this.verbBaseDetails = "Base 3 is the main form (the one that would be found in the dictionary) and is also the plain form present/future tense.";
    }
    if(ConjugationCode === "GB4"){
      this.verbBaseH1 = "Godan Base 4";
      this.verbBaseDetails = "Base 4 is most often used as \"if verb\" by adding -ba. (ex. hanaseba - If he'd just say something.) It can also be used by itself as a command form but it is extremely rude and I recommend not using it at all.";
    }
    if(ConjugationCode === "GB5"){
      this.verbBaseH1 = "Godan Base 5";
      this.verbBaseDetails = "Base 5 is used by itself as the \"let's\" form. (ex. hanasou - Let's talk.)";
    }
    if(ConjugationCode === "GBTe"){
      this.verbBaseH1 = "Godan Base te";
      this.verbBaseDetails = "Base \"te\" can be used by itself as a plain form command. It is not rude but should only be used with close friends and children. By adding kudasai it becomes the polite form command.";
    }
    if(ConjugationCode === "GBTa"){
      this.verbBaseH1 = "Godan Base ta";
      this.verbBaseDetails = "Base \"ta\" is merely Base \"te\" with an \"a\" sound on the end instead of an \"e\" sound. It is mainly used by itself as the plain form past tense. (ex. hanashita - I talked.)";
    }
    if(ConjugationCode === "IB1"){
      this.verbBaseH1 = "Ichidan Base 1";
      this.verbBaseDetails = "As you can see, Base 1 and 2 are the same. Just like with the Godan verbs, a negative can be made by adding -nai (ex. tabenai - I will not eat.) and this base, or root form, is also used for the formal form of the verb.";
    }
    if(ConjugationCode === "IB2"){
      this.verbBaseH1 = "Ichidan Base 2";
      this.verbBaseDetails = "As you can see, Base 1 and 2 are the same. Just like with the Godan verbs, a negative can be made by adding -nai (ex. tabenai - I will not eat.) and this base, or root form, is also used for the formal form of the verb.";
    }
    if(ConjugationCode === "IB3"){
      this.verbBaseH1 = "Ichidan Base 3";
      this.verbBaseDetails = "Base 3 is the main form (the one that would be found in the dictionary) and is also the plain form present/future tense.";
    }
    if(ConjugationCode === "IB4"){
      this.verbBaseH1 = "Ichidan Base 4";
      this.verbBaseDetails = "Base 4 can not be used by itself like with Godan verbs. It is only used for \"if verb\" by adding -ba. (ex. tabereba - If I eat it...) It is not the low command form for Ichidan verbs. The low command form for Ichidan verbs is Base 1 + ろ (ro).";
    }
    if(ConjugationCode === "IB5"){
      this.verbBaseH1 = "Ichidan Base 5";
      this.verbBaseDetails = "Base 5 is used by itself as the \"let's\" form. (ex. hanasou - Let's talk.)";
    }
    if(ConjugationCode === "IBTe"){
      this.verbBaseH1 = "Ichidan Base te";
      this.verbBaseDetails = "The Base \"te\" and \"ta\" forms for Ichidan verbs are a lot easier than with Godan verbs. Simply take off the \"ru\" and add a \"te\" for Base \"te\" and a \"ta\" for Base \"ta\". These have the same functions as with Godan verbs.";
    }
    if(ConjugationCode === "IBTa"){
      this.verbBaseH1 = "Ichidan Base ta";
      this.verbBaseDetails = "The Base \"te\" and \"ta\" forms for Ichidan verbs are a lot easier than with Godan verbs. Simply take off the \"ru\" and add a \"te\" for Base \"te\" and a \"ta\" for Base \"ta\". These have the same functions as with Godan verbs.";
    }
    if(ConjugationCode === "SB1"){
      this.verbBaseH1 = "Suru Base 1";
      this.verbBaseDetails = "Base 1 can not be used by itself but becomes the plain form negative simply by adding -nai. If the verb ends in う (u) then the end for Base 1 becomes わ (wa). (ex. au (Base 1) -> awa) (Plain form is what people use when talking to a friend. It would not be proper to use in a business environment.)";
    }
    if(ConjugationCode === "SB2"){
      this.verbBaseH1 = "Suru Base 2";
      this.verbBaseDetails = "Base 2 is, in most cases, a noun when used by itself but is primarily used with the polite form of the verb.";
    }
    if(ConjugationCode === "SB3"){
      this.verbBaseH1 = "Suru Base 3";
      this.verbBaseDetails = "Base 3 is the main form (the one that would be found in the dictionary) and is also the plain form present/future tense.";
    }
    if(ConjugationCode === "SB4"){
      this.verbBaseH1 = "Suru Base 4";
      this.verbBaseDetails = "Base 4 can only be used as the \"if verb\".";
    }
    if(ConjugationCode === "SB5"){
      this.verbBaseH1 = "Suru Base 5";
      this.verbBaseDetails = "Base 5 is used by itself as the \"let's\" form.";
    }
    if(ConjugationCode === "SBTe"){
      this.verbBaseH1 = "Suru Base te";
      this.verbBaseDetails = "Base \"te\" can be used by itself as a plain form command. It is not rude but should only be used with close friends and children. By adding kudasai it becomes the polite form command.";
    }
    if(ConjugationCode === "SBTa"){
      this.verbBaseH1 = "Suru Base ta";
      this.verbBaseDetails = "Base \"ta\" is merely Base \"te\" with an \"a\" sound on the end instead of an \"e\" sound. It is mainly used by itself as the plain form past tense.";
    }
    if(ConjugationCode === "KB1"){
      this.verbBaseH1 = "Kuru Base 1";
      this.verbBaseDetails = "Base 1 can not be used by itself but becomes the plain form negative simply by adding -nai. If the verb ends in う (u) then the end for Base 1 becomes わ (wa). (ex. au (Base 1) -> awa) (Plain form is what people use when talking to a friend. It would not be proper to use in a business environment.)";
    }
    if(ConjugationCode === "KB2"){
      this.verbBaseH1 = "Kuru Base 2";
      this.verbBaseDetails = "Base 2 is, in most cases, a noun when used by itself but is primarily used with the polite form of the verb.";
    }
    if(ConjugationCode === "KB3"){
      this.verbBaseH1 = "Kuru Base 3";
      this.verbBaseDetails = "Base 3 is the main form (the one that would be found in the dictionary) and is also the plain form present/future tense.";
    }
    if(ConjugationCode === "KB4"){
      this.verbBaseH1 = "Kuru Base 4";
      this.verbBaseDetails = "Base 4 can only be used as the \"if verb\".";
    }
    if(ConjugationCode === "KB5"){
      this.verbBaseH1 = "Kuru Base 5";
      this.verbBaseDetails = "Base 5 is used by itself as the \"let's\" form.";
    }
    if(ConjugationCode === "KBTe"){
      this.verbBaseH1 = "Kuru Base te";
      this.verbBaseDetails = "Base \"te\" can be used by itself as a plain form command. It is not rude but should only be used with close friends and children. By adding kudasai it becomes the polite form command.";
    }
    if(ConjugationCode === "KBTa"){
      this.verbBaseH1 = "Kuru Base ta";
      this.verbBaseDetails = "Base \"ta\" is merely Base \"te\" with an \"a\" sound on the end instead of an \"e\" sound. It is mainly used by itself as the plain form past tense.";
    }
  }
}