#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
clear();
console.log(chalk.yellow(figlet.textSync("Adventure Game", { horizontalLayout: "full" })));
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
async function firstAnimate(text) {
    for (let char of text) {
        process.stdout.write(char);
        await new Promise((resolve) => {
            setTimeout(resolve, 10);
        });
    }
}
async function secondAnimate(text) {
    for (let char of text) {
        process.stdout.write(char);
        await new Promise((resolve) => {
            setTimeout(resolve, 30);
        });
    }
}
await secondAnimate(chalk.blue.bgGrey.underline("\n\t\t\t\t How To play..\n"));
await firstAnimate("\n\t********************************************************\n");
await firstAnimate(chalk.blueBright.italic(`
 1) Select Your Champion: Choose your character and opponent from the options provided.

 2) Engage in Combat: Decide your actions wisely—attack, Run for your life , or replenish your strength(Drink Portion).

        Attack: Engage in fierce combat with your opponent. When you choose to attack, both you and your opponent strike simultaneously. If your attack is successful, your opponent's fuel decreases by 25 points. Conversely, if your opponent's attack succeeds, your fuel decreases by 25 points. Keep a close eye on your fuel gauge—reach 0 and you lose. Deplete your opponent's fuel to 0 and emerge victorious!

        Drink Portion: Replenish your strength with a health potion. Select this option to restore your fuel to its maximum level.

        Run for Your Life: Sometimes discretion is the better part of valor. Opt for this choice to make a strategic retreat and live to fight another day.
 
 3) Enjoy the Adventure: Explore, strategize, and embrace the adrenaline rush.\n \n`));
await firstAnimate("\n\t********************************************************\n");
let player = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Enter your name here :"
});
let opponent = await inquirer.prompt({
    name: "select",
    type: "list",
    message: "Select Your Opponent : ",
    choices: ["Zoombie Hordes", "Skeleton Soldiers", "Flesh Eaters", "Bone Warriors"]
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select === "Zoombie Hordes") {
        console.log(`\n\t${chalk.green(p1.name)} VS ${chalk.red(o1.name)}\n`);
        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "What's You want to do ?",
            choices: ["Attack", "Run for Your Life", "Drink Portion"]
        });
        if (ask.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                await firstAnimate(chalk.bgRed.white(`\n\t${p1.name} fuel is ${p1.fuel}\n`));
                await firstAnimate(chalk.bgGreen.white(`\n\t${o1.name} fuel is ${o1.fuel}\n`));
                if (p1.fuel <= 0) {
                    await secondAnimate(chalk.red.italic.underline("\n\tYou lose your life , Better luck next Time...\n"));
                    await firstAnimate("\n\t********************************************************\n");
                    process.exit();
                }
            }
            else if (num <= 0) {
                o1.fuelDecrease();
                await firstAnimate(chalk.bgRed.white(`\n\t${o1.name} fuel is ${o1.fuel}\n`));
                await firstAnimate(chalk.bgGreen.white(`\n\t${p1.name} fuel is ${p1.fuel}\n`));
                if (o1.fuel <= 0) {
                    await secondAnimate(chalk.green.italic.underline("\n\tCongratulations , You Win the Game...\n"));
                    await firstAnimate("\n\t********************************************************\n");
                    process.exit();
                }
            }
        }
        else if (ask.option === "Run for Your Life") {
            await secondAnimate(chalk.red("\n\tYou lose your life , Better luck Next Time.....\n"));
            await firstAnimate("\n\t********************************************************\n");
            process.exit();
        }
        else if (ask.option === "Drink Portion") {
            p1.fuelIncrease();
            await secondAnimate(chalk.green.underline(`\n\tYou Drink Health Portion , Your fuel is now ${p1.fuel}\n`));
            await firstAnimate("\n\t********************************************************\n");
        }
    }
    if (opponent.select === "Skeleton Soldiers") {
        console.log(`\n\t${chalk.green(p1.name)} VS ${chalk.red(o1.name)}\n`);
        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "What's You want to do ?",
            choices: ["Attack", "Run for Your Life", "Drink Portion"]
        });
        if (ask.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                await firstAnimate(chalk.bgRed.white(`\n\t${p1.name} fuel is ${p1.fuel}\n`));
                await firstAnimate(chalk.bgGreen.white(`\n\t${o1.name} fuel is ${o1.fuel}\n`));
                if (p1.fuel <= 0) {
                    await secondAnimate(chalk.red.italic.underline("\n\tYou lose your life , Better luck next Time...\n"));
                    await firstAnimate("\n\t********************************************************\n");
                    process.exit();
                }
            }
            else if (num <= 0) {
                o1.fuelDecrease();
                await firstAnimate(chalk.bgRed.white(`\n\t${o1.name} fuel is ${o1.fuel}\n`));
                await firstAnimate(chalk.bgGreen.white(`\n\t${p1.name} fuel is ${p1.fuel}\n`));
                if (o1.fuel <= 0) {
                    await secondAnimate(chalk.green.italic.underline("\n\tCongratulations , You Win the Game...\n"));
                    await firstAnimate("\n\t********************************************************\n");
                    process.exit();
                }
            }
        }
        else if (ask.option === "Run for Your Life") {
            await secondAnimate(chalk.red("\n\tYou lose your life , Better luck Next Time.....\n"));
            await firstAnimate("\n\t********************************************************\n");
            process.exit();
        }
        else if (ask.option === "Drink Portion") {
            p1.fuelIncrease();
            await secondAnimate(chalk.green.underline(`\n\tYou Drink Health Portion , Your fuel is now ${p1.fuel}\n`));
            await firstAnimate("\n\t********************************************************\n");
        }
    }
    if (opponent.select === "Flesh Eaters") {
        console.log(`\n\t${chalk.green(p1.name)} VS ${chalk.red(o1.name)}\n`);
        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "What's You want to do ?",
            choices: ["Attack", "Run for Your Life", "Drink Portion"]
        });
        if (ask.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                await firstAnimate(chalk.bgRed.white(`\n\t${p1.name} fuel is ${p1.fuel}\n`));
                await firstAnimate(chalk.bgGreen.white(`\n\t${o1.name} fuel is ${o1.fuel}\n`));
                if (p1.fuel <= 0) {
                    await secondAnimate(chalk.red.italic.underline("\n\tYou lose your life , Better luck next Time...\n"));
                    await firstAnimate("\n\t********************************************************\n");
                    process.exit();
                }
            }
            else if (num <= 0) {
                o1.fuelDecrease();
                await firstAnimate(chalk.bgRed.white(`\n\t${o1.name} fuel is ${o1.fuel}\n`));
                await firstAnimate(chalk.bgGreen.white(`\n\t${p1.name} fuel is ${p1.fuel}\n`));
                if (o1.fuel <= 0) {
                    await secondAnimate(chalk.green.italic.underline("\n\tCongratulations , You Win the Game...\n"));
                    await firstAnimate("\n\t********************************************************\n");
                    process.exit();
                }
            }
        }
        else if (ask.option === "Run for Your Life") {
            await secondAnimate(chalk.red("\n\tYou lose your life , Better luck Next Time.....\n"));
            await firstAnimate("\n\t********************************************************\n");
            process.exit();
        }
        else if (ask.option === "Drink Portion") {
            p1.fuelIncrease();
            await secondAnimate(chalk.green.underline(`\n\tYou Drink Health Portion , Your fuel is now ${p1.fuel}\n`));
            await firstAnimate("\n\t********************************************************\n");
        }
    }
    if (opponent.select === "Bone Warriors") {
        console.log(`\n\t${chalk.green(p1.name)} VS ${chalk.red(o1.name)}\n`);
        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "What's You want to do ?",
            choices: ["Attack", "Run for Your Life", "Drink Portion"]
        });
        if (ask.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                await firstAnimate(chalk.bgRed.white(`\n\t${p1.name} fuel is ${p1.fuel}\n`));
                await firstAnimate(chalk.bgGreen.white(`\n\t${o1.name} fuel is ${o1.fuel}\n`));
                if (p1.fuel <= 0) {
                    await secondAnimate(chalk.red.italic.underline("\n\tYou lose your life , Better luck next Time...\n"));
                    await firstAnimate("\n\t********************************************************\n");
                    process.exit();
                }
            }
            else if (num <= 0) {
                o1.fuelDecrease();
                await firstAnimate(chalk.bgRed.white(`\n\t${o1.name} fuel is ${o1.fuel}\n`));
                await firstAnimate(chalk.bgGreen.white(`\n\t${p1.name} fuel is ${p1.fuel}\n`));
                if (o1.fuel <= 0) {
                    await secondAnimate(chalk.green.italic.underline("\n\tCongratulations , You Win the Game...\n"));
                    await firstAnimate("\n\t********************************************************\n");
                    process.exit();
                }
            }
        }
        else if (ask.option === "Run for Your Life") {
            await secondAnimate(chalk.red("\n\tYou lose your life , Better luck Next Time.....\n"));
            await firstAnimate("\n\t********************************************************\n");
            process.exit();
        }
        else if (ask.option === "Drink Portion") {
            p1.fuelIncrease();
            await secondAnimate(chalk.green.underline(`\n\tYou Drink Health Portion , Your fuel is now ${p1.fuel}\n`));
            await firstAnimate("\n\t********************************************************\n");
        }
    }
} while (true);
