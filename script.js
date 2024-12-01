let scenes = {
	start: {“You stand outside of the NYC Natural History Museum, taken aback by its splendor and magnificence. Inside lays the grand prize — a 21,000lb fiberglass blue whale that hangs 	from the ceiling in the Hall of Ocean Life.”},
	enterMuseum: {“You deftly pick the lock on the outside of the Theodore Roosevelt entrance hall, and make your way into the museum.”},
	proceedToOceanLife: {“Your eyes on the prize, you walk briskly towards the Hall of Ocean Life; the horses and advanced mammals remain in your periphery; only one thing matters. 	Securing the Whale.”},
	exploreMammals: {“You stop, enamored by the advanced mammals that surround you. The magnitude of their advancement is gobsmacking, inspiring almost as much awe and wonder 	as beholding the Whale in the flesh. Almost. Not quite.”},
	approachWhale: {“The world around you fades into static and noise as you behold the 	majesty of the whale. This is what it’s all about. Just you and 21,000lbs of fiberglass. Alone 	together. In a dark, oceanic hall.”},
	scaredBySquid: {“You pause in a moment of brief trepidation, eyeing the dark and ominous squid installation with ill intent. The squid’s eye appears to stare directly through your soul, consuming all light and life force within you. You look away. The squid does too. Your soul returns to your body. For the moment.”},
	ascendWhale: {“You briefly step into a maintenance closet that you scouted on a previous visit to the museum. Inside this closet is the tallest ladder in all of New York — approximately 90 feet high. You wonder how they managed to get it in through such a small doorway. You pick up the ladder and bring it out to the main hall.”},
	squidToWhale: {“The squid turns its gaze back to you, as if to say ‘stop giving me your soul, don’t you remember what you came here for?’ You give the squid a dirty look and think to yourself: ‘damn, the scary squid is right. I should get back to work. I am here for the whale, and only the whale.’ You turn away from the squid and get back to work.”},
	cutWhaleFree: {“Teetering precariously on top of your 90-foot ladder, you remove the cutting implements from your toolbelt and begin to saw away at the cables that suspend the whale from the ceiling. As you cut the whale free, you realize you did not consider how to cushion its fall. Oh well, it’ll probably be fine. It’s a big whale. Right?”},
	caughtFreeingWhale: {“You did not consider the weight imbalance that could be caused by sawing the wrong cable too much before the others have been removed. One cable snaps, sending the whale swinging directly at you. The last thing you feel before being catapulted against the wall of the Hall of Ocean Life, is the sensation of being struck with an aircraft carrier falling from space. You black out. Skip straight to the Smithsonian.”},
	descendFreedWhale: {“You carefully saw each cable such that the Whale almost lowers itself to the ground like a feather falling from a tree. It hits the floor with the grace of a racoon falling off of a telephone wire. It appears weightless as it crashes violently to the ground.”},
	chainsawWhaleToPieces: {“You quickly rappel down the severed cables, pulling your chainsaw out of your toolbelt as you descend. This is a deeply unsafe maneuver, but time is of the essence. You narrowly avoid sawing your own leg as you remove it from your belt. By the time you reach the whale, the chainsaw seems to pull you towards it like some unholy magnet.”},
	guardsHearChainsaws: {“You realize too late that you brought the gas chainsaw, not the electric one. The gas chainsaw is very loud. In your attempt to look cool removing the chainsaw from your toolbelt as you rappel down to the whale, you have divulged your location to museum security. The alarms sound. The tripwires trip. Game Over.”},
	stashWhaleAroundMuseum: {“You use your electric chainsaw to rapidly dismember the fallen whale, working with ruthless precision as you saw through its fiberglass body. The whale seems to scream in delight as you chop it to bits, freedom and the sublime beckoning to it from afar. You whisper to the whale, ‘sit tight, I’m going to send some friends to pick up your dismembered corpse in the coming weeks.’ The whale does not speak. It is dismembered and fiberglass dust fills the air. You take this as an affirmation. The whale loves you. It wanted to be chopped up. You cannot forget that. Do not regret chopping up the whale.”},
	exfiltrateWholeWhale: {“You try to put your 90-foot ladder back into the maintenance closet from whence it came, but the doorway is too small. As earlier, you wonder how the maintenance crew managed to get the ladder into the room in the first place. You even wonder how you managed to do it yourself. It is unclear how.”},
	exitAfterStashingWhale: {“The whale is stashed around the museum, inside of garbage cans, dilapidated toilet stalls, and exhibits without adequate glass in front of the display. Every nook and cranny that you could gain access to now bears a piece of the whale within it. The whale wanted to be dismembered. It is happier now. Your friends will come to retreive the whale, in the coming weeks. You exit the museum. It was a successful visit. You miss the mozzarella sticks in the cafeteria. They do not serve mozzarella sticks at nighttime.”},
	exfiltratePieceByPiece: {“You remove your numerous Ikea bags from your handcuff briefcase, and begin to load hunks of whale into your blue tarpaulin carrying vessels. You think about all of the dogs you could bring on the subway in these bags. But no. Not tonight. Tonight, the whale is the prime directive. You continue to exfiltrate the whale in your blue tarpaulin Ikea tote bags. You bring your bags to your getaway vehicle. You have beaten the museum. For now, at least. They will notice the whale is missing. They will not be pleased. It’s time you made for the border. Uptown. Canada will offer safe haven for you and the whale. The whale will get cold, but it will be yours. The museum cannot contain the whale. It never truly belonged to them.”},
	dropWhalePieces: {“As you make your way back out of the Theodore Roosevelt entrance hall, several heavy whale chunks clatter to the floor, setting off the booby traps you worked so hard do avoid. All was for naught. The alarms sound. The guards arrive. Game Over.”},
	whaleIntoGetawayVehicle: {“Silently ferrying chunks of the whale from the Hall of Ocean Life out to your getaway vehicle, you fill your unmarked white van to the brim with dusty hunks of fiberglass. You are wearing a mask for safety purposes. The fiberglass fills the air inside the museum and your van. This is what it’s all about.”},
	smithsonian: {“Your eyes open and you see floor all around you. Standing up, disoriented, you realize that you are in the wrong museum. This is the Smithsonian museum of Natural 	History in Washington, DC. How did you get here? What is this strange makeup on your 	face? Is that your blood that you are laying in? Are they going to be upset you let the butterflies out of their enclosure? How did you get to DC? As you lift your head out of the pool of your own blood on the floor, you notice the guards have you surrounded. Game Over.”}
}

let keywords = {
	start: {“enter”, “go inside”, “breach”, “break in”},
	enterMuseum: {“ocean life”, “enter the hall”, “direct”, “proceed”},
	exploreMammals: {“detour”, “explore”, “roam”, “wander”},
	approachWhale: {“approach”, “walk towards”},
	scaredBySquid: {“fear”, “squid”, “look around”},
	ascendWhale: {“climb”, “ascend”, “rappel”, “hook”},
	cutWhaleFree: {“cut”, “liberate”, “free”, “chop”, “saw”},
	descendFreedWhale: {“descend”, “climb down”, “lower”},
	chainsawWhaleToPieces: {“chainsaw”, “dismember”, “dismantle”, “chop up”},
	stashWhaleAroundMuseum: {“stash”, “hide”, “distribute”},
	exfiltrateWholeWhale: {“exfiltrate”, “escape”, “remove”, “liberate”},
	exitAfterStashingWhale: {“leave”, “exit”, “escape”},
	exfiltratePieceByPiece: {“ferry”, “load”, “carry”},
	whaleIntoGetawayVehicle: {“load”, “getaway”, “truck”, “car”, “vehicle”},
	smithsonian: {“look”, “butterflies”, “confess”}
}

let asciiArt = {
	whale: {
```
	  .
     ":"
    "":""
   ___:____     \””\/“”/
 ,' whale  `.    \  ' /  
 |  O        \___/    |
~^~^~^~^~^~^~^~^~^~^~^~^~^~^
```
	},
	museum: {
```
    ______________________________
   /							   \
  /		the museum.      	        \
 /___________________________________\
   | |    | |    | |	 | |	| |
   | |    | |	 | |	 | |	| |
   | |    | |	 | |	 | |	| |
   | |    | |	 | |	 | |	| |
  |---------------------------------|
 /-----------------------------------\
 |___________________________________|
```
	},
	getawayVehicle: {
```
|---------------|___ 
|				|   \
|	truck    	|____\
|_______________|____|
  \__/         \__/
```
	}
}
