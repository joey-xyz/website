+++
date = '2024-05-15'
draft = false
title = 'Selecting Which Players When: GenAI Prompting for Fantasy Baseball Draft Strategy'
+++

![alt](/images/genai-prompt-draft/1.AI-generated-baseball.jpg)

*Figure 1: ChatGPT Dall-E 3 generated image, ostensibly depicting our draft strategy+ - this is a footnote you'll be sorry to miss*

**TL;DR** *Getting information inputs, or "prompts", wrong could mean your GenAI assistant helped you develop a useless strategy. In fantasy baseball, it’s not the end of the world. But it might be when wrongfully applied to a crucial product development for your business, for example.*

***

This post is an expanded addendum to my previous one, on using Generative AI for developing a fantasy baseball draft strategy (I’m using ChatGPT). **I’ll give away the ending — regardless of utilizing GenAI or not, this post is also a foil for how a draft strategy is only as good as your ability to draw upon your own previous research, in a live format++.** 

Let’s set the scene: The draft is timed, and you only have 60 seconds to make a selection when it’s your turn. There’s up to a minute for each player in your league — my league has 8 players this year, which means up to 7 minutes total before it’s your turn again. But each person’s turn means seeing your next draft picks dwindle before your eyes. All this happens virtually, but in front of your peers who make up your fantasy league. Shit-talking is a real thing and I can attest to the stress you endure in these moments; not a dry armpit in the house by the end. 

## Learn From My Failure 

![alt](/images/genai-prompt-draft/2.fail.jpg)

*Figure 2: Static-looking pink background with the haphazardly decending word, "fail"*

Why take this so seriously? The first year I played fantasy baseball I made what I now know is a horrifically laughable error, by drafting a catcher as my first round pick. Catchers, while certainly important, are not often — scratch that, ever — first round choices. Catchers do have to catch balls thrown at them from pitchers, sure, but the pitcher is a bigger star here (sorry, catchers). And when catchers are up to bat, they sometimes fall into slugger category but often don’t hit more regularity than streaks, if doing well (big if true). Catchers most certainly are also not multiple position players, meaning they strictly play as catchers. On top of all this, they often share a catching rotation as they are individually paired up with only a specific pitcher or two, on a roster of pitchers that might number half-to-a-full-dozen. Ultimately this means that a catcher might play, for any given 5 or 6 game week, about 2 to 4 games on average per week. And this means a low at-bat ratio, meaning less plate time as a batter, meaning lower points potential overall. So, drafting this position first means you’ve lost out on an elite, regular playing, high value, scarce player. 

So, my fantasy league still laughs at me for this. And I can’t blame them. After everything I know now, I’d be leading the laughing stock charge toward past me, too. 

## Prompting Generative AI 

Past me has been training not just future me, but also GenAI. I’ll be writing another post about how exactly I do this, and the value and necessity of properly training your GenAI. But today is simple and short: **Prompting (which is considered "training") generative AI works to ensure that the GenAI understands what is asked of it, so that it can provide relevant and useful information for you.**

![alt](/images/genai-prompt-draft/3.reminder-prompt-previous-chats.png)

*Figure 3: Me prompting ChatGPT to recall our previous conversations*

The image above shows that the GenAI is aware of our previous conversations. Picking up where you’ve left off enables GenAI to recall and continue on (hot tip: keep using the same chat for optimal recollection, instead of starting a new one). 

The question on my mind today for GenAI: “from everything you know or have access to, what would be your order selection for drafting your 23 person roster? We play weekly head-to-head format.” 

![alt](/images/genai-prompt-draft/4.genai-draft-23-roster.png)

*Figure 4: Q & A from me to the GenAI: high-level how to approach a 23-person roster draft*

Important here is that I tell it what type of league we play in, weekly head-to-head in this case. Otherwise, GenAI might draw from all possible types — like daily formats, which means making daily instead of weekly selections. **Getting information inputs, or "prompts", wrong could mean your GenAI assistant helped you develop a useless strategy. In fantasy baseball, it’s not the end of the world. But it might be when wrongfully applied to a crucial product development for your business, for example.** 

Now that we know that GenAI is understanding our specific use case, we turn toward asking it what it knows. **Another reason for training AI is to ensure that you’re able to trust the information it gives you**. Consider this a pre-validation process. There have been numerous examples of GenAI pulling ideas from thin air, instead of reliable, actual information+++.  This is because **GenAI can only tell us what they know, which essentially means what we tell them they know**, at least for now. And so, part of training involves asking it why and how it came to its conclusions. 

![alt](/images/genai-prompt-draft/5.strategy-ask.png)

*Figure 5: Q & A from me to the GenAI: tell me how you got here?*

Above shows me asking what the GenAI’s strategy is based on, where it came up with the approach, or where it pulled the approach from. It’s answer, cited but only when asked++++ is correct in stating that it’s derived from commonly accepted fantasy baseball drafting principles. GenAI says it’s drawing on general trends over the years, known dynamics, and is not taking intel from a single source. From this, six principles were cited: 

> 1) value over replacement player (VORP)  <br>  
> 2) position scarcity  <br>  
> 3) balanced team construction  <br>  
> 4) risk management  <br>  
> 5) adaptation to league settings  <br>   
> 6) expert consensus and historical trends  

![alt](/images/genai-prompt-draft/6.six-principles-draft-strategy.png)

*Figure 6: Six principles for developing a fantasy baseball draft strategy*

As an overall strategic approach to fantasy baseball drafting, these six categories are essential. But what’s not accounted for in this strategy is applicability — actually playing out this approach is challenged when up against a real world scenario. Like a timed draft, for instance. Lucky for us, I have this exact instance to draw from. Or draft out. Pun intended. 

## From Generative to Applicable AI

The approach that GenAI generated is, admittedly, a smart if not common approach. But, also admittedly, is explained far more simply and precisely that I might: 

![alt](/images/genai-prompt-draft/7.three-draft-rounds.png)

*Figure 7: Three distinct drafting rounds, according to aims*

Impressive to me, GenAI was able to separate and describe three distinct drafting rounds, as shown in the above image of text. The first encompasses the first five players of the 23-player draft rounds, for a “balanced foundation” as GenAI describes it. This foundation is built upon the suggested two first round elite hitter picks, focused on those who can play multiple positions, as this gives extra flexibility and value. Rounds three-through-five are suggested to focus on top-tier pitchers and elite closers. All in, these first five rounds are about scarcity and power selections. 

The middle rounds, six-through-fifteen, are to “fill positions and focus on upside.” Essentially these rounds are, well, rounding out your team with reliable players. These might not be top picks, but they are solid middle-tier players: these are bedrock players, the ones you depend most on, as a team comprised not necessarily of individuals but how they amass together. Like a good closer who can maintain a current winning score, or short stops and second-basers who do a lot of moving around and saving the day. 

Late rounds, sixteen-through-twenty-three, GenAI refers to as “depth, potential, and speculative picks.” The first two-thirds of these should focus on backups for positions that can run thin with injury, say for your outfielders, or additional closers or high-strikeout reliever pitchers. The last two-to-three players are up for grabs: this is your chance to take a chance. Dream big. An example, this year I drafted 2023's player with the most stolen bases, with 67 (nearly twice as many as the next candidate), but he only sees about 1/3 to 1/2 of the at-bats, making his potential to generate points sketchy at best. But this is the time to gamble! GenAI told me so. 

## Validating GenAI’s Suggestions in the Real World  

How did this strategy play out during the actual draft? Well, as I wrote above, at the end of any draft I require a shower or, at the very least, an additional application of deodorant. I’m not playing baseball myself in these instances, but it sure feels like it given the pressure and stakes. Oh right, not quite the point of this post.

So, while in the first paragraph I wrote this post is a foil, this is a lie. Or, it’s actually a double foil because GenAI’s strategy is indeed useful and correct when conducting a fantasy baseball draft. The original foil still stands, however: that up against the musical chairs-ness of it all — seeing players drafted and gone before your eyes — your live strategy must alter. Because real people drafting along side you can, and likely will, be following a similar strategy. The Platonic fantasy baseball draft ideal is one-for-one strictly only possible if — big if true — you were playing alone. Just like Plato. 

To draw, correction — draft — it out: each of the three rounds, as described by GenAI, held true. I drafted players and their types according to the outlined rounds. Yes, rounds 1-5 were filled with elite hitters and top-tier starting and closing pitchers. But no, these were not GenAI’s strategic order; the ideal order assumes no opposing outcomes, like having others draft alongside you, who are thereby limiting your choices. I wound up drafting a top hitter first, playing outfield, followed by two top-tier starting pitchers. Fourth selection went to a closer, and fifth to a solid short stop. 

![alt](/images/genai-prompt-draft/8.2024-23-player-roster.png)

*Figure 8: My 2024 original 23-player draft list, in drafting round order*

All is to say, GenAI’s strategy is on-point. Except when coupled with the challenges presented by a real life example. Here, GenAI’s strategy appears as a jumbled, messy, and pixelated magic eye painting in this specific moment of a fantasy draft. If you squint, you can see the whole picture. And yet, while jumbled, the image is there all along. **It's that utilizing it requires knowing how to take the Platonic ideal GenAI suggests, while maintaining three things:** 

> 1) **your own knowledge and research**  <br>   
> 2) **flexibility to implement new information**  <br>  
> 3) **the resolve and calm to adapt accordingly**

You’re the team manager; GenAI is your *assistant* manager, at best.

### Footnotes

+The infographic generated by ChatGPT & Dall-E 3 is meant to depict the overall strategy generated by the GenAI. It is rife with problems, like non-english words and even gibberish, irrelevant symbols like dollar signs, and an incoherent logical flow, ie: non-chronological to the 3-rounds it's meant to illustrate. **But this gets me super excited because now I'm working on another post about ChatGPT's laziness**. Specifically, I'll illustrate the back-and-forth we went through to simply generate this pile of garbage image. Equally fun and frustrating watching the GenAI fail. 

++GenAI, in current form, cannot be predictive enough - beyond the info we supply it - without G Flow Networks, which are a little beyond me, but involve reinforced learning, deep generative models, and energy based probabilistic modelling.  

+++Google examples of GenAI and LLM [large language models] lying, from chat bots to legal precedents. It’s hours of fun.

++++GenAI, particularly ChatGPT since this is the one I’ve used here, is happy enough to share its sources, but you have to ask for them. When I asked it to list the sources it used to develop the strategies we worked on, it give me five: 

> 1) fantasy sports websites and analysts, like ESPN and CBS Sports  <br>  
> 2) statistical analysis tools, that tell us about player evaluation, like Fangraphs and Statscast  <br>  
> 3) fantasy baseball guides and books  <br>  
> 4) fantasy sports communities and forums, where people discuss and share strategies, like Reddit’s f/fantasybaseball and Rotoworld Forums  <br>  
> 5) historical trends and seasonal analysis, which are accumulated across seasons in different contexts, like when a new rule is implemented, changing how the game is played from year to year  <br>  
> ![alt text](/images/genai-prompt-draft/9.genai-list-sources.png)  <br>  
> *Figure 9: Sources listed by ChatGPT*
