// Auto-generated code. Do not edit.
namespace myImages {

    helpers._registerFactory("image", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "image1":
            case "PLAYER1":return img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f 2 f 2 e f . . 
. . f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`;
            case "image2":
            case "food":return img`
....................
....................
....................
....................
....................
....................
.........bb.........
........cccc........
........cccc........
.........ff.........
.........bf.........
.........bb.........
........bbbb........
.......bbbbbb.......
.......cccccc.......
.......cccccc.......
.......cccccf.......
........cfff........
....................
....................
`;
        }
        return null;
    })

    helpers._registerFactory("animation", function(name: string) {
        switch(helpers.stringTrim(name)) {

        }
        return null;
    })

    helpers._registerFactory("song", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "song1":
            case "COLLECT":return hex`00c8000408010107001c00020a006400f4016400000400000000000000000000000000000000030600000008000124`;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
