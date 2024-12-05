+++
date = '2024-04-12'
draft = false
title = 'Maximizing Fantasy Baseball Draft Strategy: Leveraging GenAI for Starting Pitcher Selection'
description = 'I wrote a formula for calculating a ranked pitcher score for my player drafting strategy, With the assistance of GenAI.'
+++

**TL;DR** *I wrote a formula for calculating a ranked pitcher score for my player drafting strategy, With the assistance of GenAI.*

![alt](/images/maximizing/1.png)

*Figure 1. My Pitcher Score formula determined in collaboration with ChatGPT 4*

This’ll be my third year playing fantasy baseball and I wanted to try something different. Like with previous years, I began by gathering my necessary materials to develop a personal cheat sheet: team depth charts, individual player pages plus comparisons, stats and projections from trusted sources like [Fangraphs](https://www.fangraphs.com/), [Pitcherlist](http://pitcherlist.com/), and [fivethirtyeight](http://fivethirtyeight.com/), and MLB schedules and pre-season team power rankings. 

These sources help to build out my strategy. I have everything I need at my fingertips to determine my selection priority, including building descending lists of specific player positions according to draft order for the 23-person fantasy team. 

![alt](/images/maximizing/2.jpg)

![alt](/images/maximizing/3.jpg)

*Figure 2 & 3. Screengrabs from my 2022 season wins*

**But this time around, I thought, why not employ AI to help me write my own formula to determine my draft order?** So I decided which positions to draft in order [see next blog post in this series for more], and then **selected which stats to prioritize in descending order**. First up, my focus is on SP (starting pitchers). 

My league uses the ESPN fantasy app, and I first determined that, at least for the initial draft, I’d only consider 2023 season stats.

![alt](/images/maximizing/4.png)

*Figure 4. Sorting by player's stats views*

2024 Projections are just that, projections, which I’ve seen fail to pan out time and again. Sure, you can give these a look. But it’s a good idea to base real decisions on real, historical data. The other categories are moot, either until the official current season begins, or like with Batter vs Pitcher, can be captured in individual player stats. Perfect timing, as I was about to move on to these for next up considerations. 

## Order Considerations of Player Stats 

![alt](/images/maximizing/5.png)

*Figure 5. Sorting starting pitchers (SP) 2023 stats in ESPN's fantasy baseball platform*

Moving beyond 2023 Season stats to determine who I consider as the best starting pitchers (SP), I chose to focus on WHIP, innings pitched, strikes, and ERA, in descending order. Why is WHIP so important? WHIP takes a handful of important factors into account by including “walks plus hits over innings pitched”:  

![alt](/images/maximizing/6.png)

*Figure 6. Formula to calculate WHIP (walks plus hits over innings pitched)*

Even though WHIP heavily weights IP, a low WHIP – which is what we want – doesn’t inherently mean high IP over a given season. For instance, a pitcher might have a .97 WHIP but only played a total of 10 innings in a single season, as they were called up as a relief pitcher and deployed only for 3 games in a series before the regular pitching rotation is restored, rendering this player back to the farm team. And so, the second highest weighted category is the stand-alone stat for IP. 

Coming in at third weighted, I placed SP with the highest strikes (K) possible. But you have to be careful here: often high K counts amount to higher ERA (and WHIP) because more pitches are crossing the ideal strike zone for a batter to make contact. So this is where the fourth weighted, and final, stats category for comparison comes in, the ERA. ERA, or earned run average, computes the amount of runs a single pitcher allows during a game, over the number of innings they pitch. 

![alt](/images/maximizing/7.png)

*Figure 7. Calculation for ERA (earned run average)*

The formula for ERA is earned runs / innings pitched x 9, and we x ER or IP by 9 because there are 9 innings total per regular play baseball game (as in, no additional or extra time innings). 

Now that I have my own statistical ranking system to determine priority of available SP, I can ask ChatGPT to help me write the formula. I began by asking what it can determine by considering a screenshot of current pitchers and their stats. Here’s what happened in this step of my chat with the AI: 

![alt](/images/maximizing/8.png)

*Figure 8. The first task I gave to the AI: describing what is contained within this image of SP stats*

ChatGPT told me it determined 5 areas of consideration: 

> 1) Players  <br>  
> 2) Type and Status  <br>  
> 3) Today’s Date  <br>  
> 4) 2023 Season Pitching Statistics  <br> 
> 5) Research and Rostering 

Ultimately, it concluded that the image I provided enables fantasy baseball players to consider athletes’ performance in order to decide their fantasy team roster. 

Next, I told the AI that all I want it to consider is 1) Players and 4) 2023 Season Pitching Statistics, since the other dimensions it pulled out aren’t relevant for this situation. I then asked it to write me a formula to determine best SP, given the statistical importance I outlined: lowest WHIP, highest IP, highest K, and lowest ERA, in descending order+: 

![alt](/images/maximizing/9.png)

*Figure 9. Collaboration with AI begins when I confirm what it can see, but tell it to only hone in on specific details*

The AI rewrote my parameters for easier equation formulation and assigned weights to each. So, WHIP becomes W (w1), IP stays IP (w2), K stays K (w3), and ERA becomes E (w4), inclusive of abbreviation and corresponding weights++. 

## Outcome of Formula

I next asked ChatGPT to plug in the values depicted in the screenshot, of player statistics+++, and verify the results of this formula written to determine best starting pitcher score. It first reaffirmed how the formula is written, instructing me on how it will be utilized (image 1 that follows), and next shows me its computation, as written code (image 2 that follows). 

![alt](/images/maximizing/10.png)

*Figure 10. Formula for Pitcher Score calculation refined*

![alt](/images/maximizing/11.png)

*Figure 11. Python code used to determine the results for SP formula*

Finally, a list of SP from best to worst according to the parameters I instructed, is produced. **We're left with a brand new Pitcher Score, as ranking best to worst, from my formula and calculations.** Here’s the list of the top 12 MLB starting pitchers from the formula that AI and I wrote together: 

![alt](/images/maximizing/12.png)

*Figure 12. The ranked results for calculating best SP*

My next article will be on to how I select closing pitchers. Stay tuned ⚾️ 🤓 

### Footnotes 

+Each of these figures exist MLB-wide and are not formulas I’ve determined or calculated myself, whether simply the adding up of specific markers, like strikes and innings pitched, or more complex computations like WHIP or ERA. 

++This was my third attempt at deciding the proper formula for use. The first one simply took each of these in turn was weighted from first important, 1, to least important, 5: 2023 season, IP, K, ERA, H, and ER. I abandoned this avenue because I turned to WHIP, which takes a handful of these into considerations, rendering individual considerations of IP, W, and H moots. The second attempt prioritized two main elements according to highest stats, with IP and K, and then the lowest stats, with ERA and WHIP. I wrote this out as: (IP + K) + (ERA x WHIP). But this still felt unnecessarily clunky, if not outright off, because of a discrepancy between multiplication and addition of variables. Thus the third option became more suitable and I ran with it.

+++There are many different types of stats that can be considered in baseball. Here is a list of [MLBs "standard stats"](https://www.mlb.com/glossary/standard-stats) while a more comprehensive, [advanced list of stats is here](https://www.cbssports.com/mlb/news/mlb-advanced-stats-glossary-a-guide-to-baseball-stats-that-go-beyond-rbi-batting-average-era/). 

