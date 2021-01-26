namespace SpriteKind {
    export const Dog = SpriteKind.create()
    export const Marker = SpriteKind.create()
    export const Trap = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile1 = img`
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 1 1 8 8 8 8 8 8 1 1 8 8 8 8 8
        8 1 8 8 8 8 8 8 8 8 1 1 8 8 8 8
        1 8 8 8 1 8 8 8 8 8 9 1 8 8 8 8
        1 1 8 8 1 9 8 8 8 1 9 1 8 8 8 8
        8 8 8 8 1 9 8 8 8 1 1 9 8 8 8 8
        8 8 8 8 8 9 8 8 8 8 1 9 8 8 8 8
        8 8 8 8 8 1 9 8 8 8 1 9 8 8 8 8
        8 8 8 8 8 1 9 8 8 8 1 1 8 8 8 8
        8 8 8 8 1 9 8 8 8 8 8 1 8 8 8 8
        8 8 8 8 9 8 8 8 8 8 8 1 8 8 8 8
        8 8 8 8 9 9 8 8 8 9 9 1 8 8 8 8
        8 8 8 8 9 8 8 8 8 9 1 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    `
    //% blockIdentity=images._tile
    export const tile2 = img`
1 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 
1 9 1 9 8 8 8 8 8 8 8 8 8 8 8 8 
1 1 8 9 8 8 8 8 8 8 8 8 8 8 8 8 
1 1 9 8 8 8 8 8 8 8 8 8 8 8 8 8 
1 1 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
1 1 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
1 1 8 9 8 8 8 8 8 8 8 8 8 8 8 8 
1 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 
1 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
1 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
1 9 8 8 9 8 8 8 8 8 8 8 8 8 8 8 
1 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
1 1 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
1 1 1 9 8 8 8 8 8 8 8 8 8 8 8 8 
1 1 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
1 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
8 8 8 8 8 8 8 8 8 8 8 8 1 8 9 1 
8 8 8 8 8 8 8 8 8 8 8 8 1 1 9 1 
8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 9 1 1 
8 8 8 8 8 8 8 8 8 8 8 8 9 9 1 8 
8 8 8 8 8 8 8 8 8 8 8 8 9 8 1 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 1 
8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 1 9 8 
8 8 8 8 8 8 8 8 8 8 8 8 9 1 9 1 
8 8 8 8 8 8 8 8 8 8 8 8 9 8 1 1 
8 8 8 8 8 8 8 8 8 8 8 8 9 8 1 1 
8 8 8 8 8 8 8 8 8 8 8 8 9 9 1 1 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 1 
8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 1 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
8 8 f 8 8 f 8 8 f 8 8 f 8 8 f 8 
e e f e e f e e f e e f e e f e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
e e f e e f e e f e e f e e f e 
e e f e e f e e f e e f e e f e 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e 4 e e e e e 
e e e e e e e e e e e e e e 4 e 
e e 4 e e e e e 4 e e e e e e e 
e e e e e e 4 e 4 e e e 4 e e e 
e e e e e e e e e e 4 e e e e e 
e e e e e e e e 4 e e e e e e e 
e e e e e 4 e e e e e e e e 4 e 
e e e e e e e e e e e e e e e e 
e e e e e 4 e e e e e 4 e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e 4 e 
e e e e e e 4 e e e e e e e e e 
e e 4 e e e 4 e e e e 4 4 e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`
    //% blockIdentity=images._tile
    export const tile7 = img`
        e e e e e e e e e e e e e e e e
        e e e e 5 e e e 5 e 5 e 5 e e e
        e e 5 e e e e e e e e e 5 e 4 e
        e e 4 5 e e e e 5 e e e e e e e
        e e e e e e 4 e 4 e e e 4 e e e
        e e e e e e e e e e 4 e e e e e
        e 5 e e e e e e 4 e e e e e e e
        e e e e e 4 e e e e e e 5 e 4 e
        e e e 5 e e e e e e e e e e e e
        e e e e e 4 e e e e e 4 e e e e
        e e e e e e e e 5 e e e e e e e
        e e e e e e e e e e e 5 e e 4 e
        e e e 5 5 e 5 e e e e e e e 5 e
        e e 4 e e e 4 e e 5 e 4 4 e e e
        e e e e e e e e e e e e 5 e e e
        e e e e e e e e e e e e e e e e
    `
    //% blockIdentity=images._tile
    export const tile8 = img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        8 9 f 1 8 f 9 9 f 8 1 f 8 9 f 8
        e e f e e f e e f e e f e e f e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        e e f e e f e e f e e f e e f e
        e e f e e f e e f e e f e e f e
    `
    //% blockIdentity=images._tile
    export const tile9 = img`
        7 7 7 6 6 6 6 6 6 6 6 7 7 7 7 7
        7 7 6 6 6 6 6 6 6 6 6 6 6 6 7 7
        7 6 6 6 6 7 7 7 7 6 6 6 6 6 7 7
        7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 6 7 7 7 7 7 6 6 6 6 7 7 7 7 7
        7 6 6 7 7 6 6 6 7 7 6 6 7 7 7 7
        7 6 6 6 6 6 7 7 7 7 7 6 6 7 7 7
        7 7 6 6 6 7 7 7 7 7 7 7 6 7 7 7
        7 7 7 6 6 6 6 7 7 7 6 6 6 7 7 7
        7 7 7 6 7 7 6 6 6 6 6 7 7 7 7 7
        7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 6 7 7 7 6 6 6 6 7 7 7 7 7
        7 7 7 6 6 7 6 6 6 6 6 7 7 7 7 7
        7 7 7 7 6 6 6 6 6 7 7 7 7 7 7 7
        7 7 7 7 7 6 6 6 7 7 7 6 6 7 7 7
        7 7 7 7 7 7 6 6 6 6 6 6 7 7 7 7
    `
}
scene.onOverlapTile(SpriteKind.Dog, myTiles.tile9, function (sprite, location) {
    dog.say("嗷～呜呜呜呜～～～", 2000)
    dog.follow(hero, 1)
    bandit.say("阿黄，你怎么了", 1000)
    bandit.follow(dog, 10)
})
function encounter () {
    encountered = true
    controller.moveSprite(hero, 0, 0)
    hero.x -= 48
    bandit = sprites.create(img`
. . . . f f f f . . . . 
. . f f e e e e f f . . 
. f f e e e e e e f f . 
f f f f 4 e e e f f f f 
f f f 4 4 4 e e f f f f 
f f f 4 4 4 4 e e f f f 
f 4 e 4 4 4 4 4 4 e 4 f 
f 4 4 f f 4 4 f f 4 4 f 
f e 4 d d d d d d 4 e f 
. f e d d b b d d e f . 
. f f e 4 4 4 4 e f f . 
e 4 f b 1 1 1 1 b f 4 e 
4 d f 1 1 1 1 1 1 f d 4 
4 4 f 6 6 6 6 6 6 f 4 4 
. . . f f f f f f . . . 
. . . f f . . f f . . . 
`, SpriteKind.Enemy)
    tiles.placeOnTile(bandit, tiles.getTileLocation(8, 4))
    game.showLongText("强盗：过桥要交过桥费", DialogLayout.Bottom)
    if (game.ask("给钱吗？")) {
        leashTheDog()
        if (hasMoney) {
            game.showLongText("你这是假钱，阿黄 ，咬他", DialogLayout.Bottom)
        } else {
            game.showLongText("你没钱，阿黄 ，咬他", DialogLayout.Bottom)
        }
    } else {
        leashTheDog()
        game.showLongText("不给钱，阿黄，咬他", DialogLayout.Bottom)
    }
    controller.moveSprite(hero)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Trap, function (sprite, otherSprite) {
    sprite.say("脚都被缠住了", 500)
    controller.moveSprite(sprite, 20, 20)
    pause(1000)
    controller.moveSprite(sprite)
})
function intro () {
    game.splash("一个天气晴朗的日子", "勇者在河边玩耍")
    game.splash("勇者发现河对岸有个宝箱")
}
function leashTheDog () {
    dog = sprites.create(img`
. . 4 4 4 . . . . 4 4 4 . . . . 
. 4 5 5 5 e . . e 5 5 5 4 . . . 
4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
. e e 5 5 5 5 5 5 5 5 e e . . . 
. . e 5 f 5 5 5 5 f 5 e . . . . 
. . f 5 5 5 4 4 5 5 5 f . . f f 
. . f 4 5 5 f f 5 5 6 f . f 5 f 
. . . f 6 6 6 6 6 6 4 4 f 5 5 f 
. . . f 4 5 5 5 5 5 5 4 4 5 f . 
. . . f 5 5 5 5 5 4 5 5 f f . . 
. . . f 5 f f f 5 f f 5 f . . . 
. . . f f . . f f . . f f . . . 
`, SpriteKind.Dog)
    dog.say("汪！", 500)
    tiles.placeOnTile(dog, tiles.getTileLocation(6, 4))
    dog.follow(hero, 20)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.say("啊！", 500)
    sprite.x += -16
    otherSprite.say("没钱别想过去", 500)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)

    if (tamed) {
        dog.follow(bandit)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Dog, function (sprite, otherSprite) {
    if (hasBone) {
        hasBone = false
        if (game.ask("把骨头给小狗吗?")) {
            otherSprite.say("汪呜", 500)
            tamed = true
        } else {
            sprite.say("啊！", 500)
            otherSprite.say("汪！", 500)
            info.changeLifeBy(-1)
            scene.cameraShake(4, 500)
            pause(1000)           
        }
    } else if (!tamed) {
        sprite.say("啊！", 500)
        otherSprite.say("汪！", 500)
        info.changeLifeBy(-1)
        scene.cameraShake(4, 500)
        pause(1000)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Dog, function (sprite, otherSprite) {
    if (!tamed) {
        bandit.say("阿黄，我帮你解开", 1000)
        pause(1000)
        dog.say("汪汪汪～～～", 2000)
        dog.follow(hero, 100)
    } else {
        bandit.say("阿黄，你怎么变心了", 1000)
        dog.say("汪汪汪", 1000)
        pause(1000)
        bandit.vx = 100
        bandit.vy = 100
        bandit.setFlag(SpriteFlag.BounceOnWall, true)
    }
    
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(9, 0), sprites.dungeon.chestOpen)
    game.splash("宝箱里面是两块乐高")
    hero.say("就这？！", 2000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Marker, function (sprite, otherSprite) {
    if (!(encountered)) {
        encounter()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    if (hero.tileKindAt(TileDirection.Center, sprites.castle.tileGrass2)) {
        tiles.setTileAt(tiles.locationOfSprite(hero), sprites.castle.tileGrass1)
        if (randint(1, tiles.getTilesByType(sprites.castle.tileGrass2).length) == 1) {
            hero.say("哇！挖到了钱！", 1000)
            hasMoney = true
        } else {
            hero.say("这里没有东西", 1000)
        }

        if (tiles.getTilesByType(sprites.castle.tileGrass2).length == 0) {
            game.splash("挖到了骨头")
            hasBone = true
        }
    }
})
let hasMoney = false
let hasBone = false
let tamed = false
let animationTick = false
let bandit: Sprite = null
let dog: Sprite = null
let trapSprite: Sprite = null
let encountered = false
let hero: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`0e000a00090909090a0a0305040c070708080b090b0a0a0b03020408070707080b0e0a0b0e0a03050407080707080a0a0b090b0b03020407070707070e090909090906060d070707070709090b09090b03050407070808070b090b090b0a030204070707080709090909090b0305040807070707090e0909090e03050408070707080909090e09090305040707080708`,
            img`
. . . . . . 2 2 2 . . . . 2 
. . . . . . 2 2 2 . . . . 2 
. . . . . . 2 2 2 . . . . 2 
. . . . . . 2 2 2 . . . . 2 
. . . . . . . . . . . . . 2 
. . . . . . 2 2 2 . . . . 2 
. . . . . . 2 2 2 . . . . 2 
. . . . . . 2 2 2 . . . . 2 
. . . . . . 2 2 2 . . . . 2 
. . . . . . 2 2 2 . . . . 2 
`,
            [myTiles.tile0,sprites.castle.tilePath1,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.dungeon.chestClosed,myTiles.tile8,myTiles.tile9,sprites.dungeon.chestOpen],
            TileScale.Sixteen
        ))
hero = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
tiles.placeOnTile(hero, tiles.getTileLocation(3, 2))
scene.cameraFollowSprite(hero)
intro()
encountered = false
let markerSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . e 
. . . . . . . . . . . . . . . e 
. . . . . . . . . . . . . . . e 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Marker)
tiles.placeOnTile(markerSprite, tiles.getTileLocation(7, 4))
info.setLife(5)
for (let 值 of tiles.getTilesByType(myTiles.tile9)) {
    trapSprite = sprites.create(img`
7 7 7 7 6 6 6 6 6 6 6 7 7 7 7 7 
7 7 7 6 6 7 7 7 7 7 7 6 6 7 7 7 
7 6 6 6 7 7 7 7 7 7 7 7 6 7 7 7 
7 6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 
7 6 6 7 7 7 6 6 6 6 6 7 7 7 7 7 
7 7 6 6 6 6 7 7 7 7 6 6 7 7 7 7 
7 7 6 6 7 6 6 6 6 6 6 6 7 7 7 7 
7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 6 7 6 6 6 6 6 7 7 7 7 7 7 
7 7 7 6 6 6 7 7 7 6 6 7 7 7 7 7 
7 7 7 6 6 6 7 7 7 6 6 7 7 7 7 7 
7 7 6 6 6 7 6 6 6 6 7 7 7 7 7 7 
7 7 6 6 7 7 7 7 7 7 7 7 6 7 7 7 
7 7 7 6 7 7 7 7 7 7 7 6 6 7 7 7 
7 7 7 7 6 6 6 6 6 6 6 6 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, SpriteKind.Trap)
    trapSprite.z = -10
    tiles.placeOnTile(trapSprite, 值)
}
controller.moveSprite(hero)
game.onUpdateInterval(500, function () {
    if (animationTick) {
        tiles.setTileAt(tiles.getTileLocation(7, 0), myTiles.tile4)
        tiles.setTileAt(tiles.getTileLocation(7, 1), myTiles.tile1)
        tiles.setTileAt(tiles.getTileLocation(7, 2), myTiles.tile4)
        tiles.setTileAt(tiles.getTileLocation(7, 3), myTiles.tile1)
        tiles.setTileAt(tiles.getTileLocation(7, 5), myTiles.tile4)
        tiles.setTileAt(tiles.getTileLocation(7, 6), myTiles.tile1)
        tiles.setTileAt(tiles.getTileLocation(7, 7), myTiles.tile4)
    } else {
        tiles.setTileAt(tiles.getTileLocation(7, 0), myTiles.tile1)
        tiles.setTileAt(tiles.getTileLocation(7, 1), myTiles.tile4)
        tiles.setTileAt(tiles.getTileLocation(7, 2), myTiles.tile1)
        tiles.setTileAt(tiles.getTileLocation(7, 3), myTiles.tile4)
        tiles.setTileAt(tiles.getTileLocation(7, 5), myTiles.tile1)
        tiles.setTileAt(tiles.getTileLocation(7, 6), myTiles.tile4)
        tiles.setTileAt(tiles.getTileLocation(7, 7), myTiles.tile1)
    }
    animationTick = !(animationTick)
})
