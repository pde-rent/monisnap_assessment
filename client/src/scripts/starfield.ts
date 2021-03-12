import {LOG} from "src/scripts/utils";

interface Star {
    x: number;
    y: number;
    z: number;
    color: string;
    scale: number;
}

// yellow / blue / red / green
const STAR_COLORS = [[235, 161, 52], [52, 83, 237], [227, 43, 43], [16, 163, 55]];
const STAR_WHITE = [255, 255, 255];

export default class Starfield {

    public warp: boolean;
    public canvas: HTMLCanvasElement | null = null;
    private ctx: CanvasRenderingContext2D | null = null;
    private starCount: number;
    private warpStarCount: number;
    private warpStarScale = 0.75;
    private centerX = 0;
    private centerY = 0;
    private focalLength = 0;
    private stars: Star[] = [];
    private step = 0;
    private warpStep = 0;
    private regenSeed = 0;

    // TODO: use dpi / ppi to generate less stars on mobile than desktop / tv
    constructor(
        canvas: HTMLCanvasElement | null = null,
        starCount = 400,
        warpStarCount = 400,
        warp = false
    ) {
        this.warp = warp;
        this.starCount = starCount;
        this.warpStarCount = warpStarCount;
        if (canvas) { this.attach(canvas); }
    }

    public attach(canvas: HTMLCanvasElement) {
        LOG.debug("attaching canvas to Starfield");
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        // TODO: make this responsive with user device DPI
        this.resize();
        this.initStars();
        this.runFrame();
    }

    private runFrame = () => {
        this.moveStars();
        this.drawStars();
        window.requestAnimationFrame(this.runFrame);
    };

    public toggleWarp() {
        if (!this.canvas || !this.ctx) { return; }
        this.warp = !this.warp;
        this.initStars();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "rgba(0,0,3,1)";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    public stopWarping() {
        if (this.warp) { this.toggleWarp(); }
    }

    public startWarping() {
        if (!this.warp) { this.toggleWarp(); }
    }

    public warpFor(ms: 2000) {
        this.startWarping();
        setTimeout(() => { this.stopWarping(); }, ms);
    }

    private initStars() {
        if (!this.canvas || !this.ctx) { return; }
        // if (!this.warp) { this.stars = []; }
        const missingStars = (this.warp ? this.warpStarCount : this.starCount) - this.stars.length;
        for (let i = 0; i < missingStars; i++) {
            this.stars.push(this.generateStar() as Star);
        }
    }

    private generateStar(): Star | null {
        if (!this.canvas || !this.ctx) { return null; }
        let color = Math.random() > 0.98 ? STAR_COLORS[Math.round(Math.random() * 3)] : STAR_WHITE;
        const shade = Math.round(Math.random() * 0.75 + 0.25);
        color = color.map(c => Math.round(c * shade));
        return {
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            z: Math.random() * this.canvas.width,
            color: `rgb(${color[0]},${color[1]},${color[2]})`,
            scale: (Math.random() * 0.8 + 0.2) * (this.warp ? this.warpStarScale : 1)
        } as Star;
    }

    private moveStars() {
        if (!this.canvas || !this.ctx) { return null; }
        for (let i = 0; i < this.stars.length; i++) {
            this.stars[i].z -= (this.warp ? this.warpStep : this.step);
            if (this.stars[i].z <= 0) {
                // if (!(++this.regenSeed % 3)) {
                    // change star origin of every third star
                    this.stars[i].x = Math.random() * this.canvas.width;
                    this.stars[i].y = Math.random() * this.canvas.height;
                    this.stars[i].z = Math.random() * this.canvas.width;
                // } else {
                    // to save cpu, reuse previous star previous origin
                //     this.stars[i].z = this.canvas.width;
                // }
            }
        }
        this.regenSeed = 0;
    };

    private drawStars() {
        if (!this.canvas || !this.ctx) { return null; }
        let pixelX, pixelY, pixelRadius;

        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < this.stars.length; i++) {
            const s = this.stars[i];
            pixelX = (s.x - this.centerX) * (this.focalLength / s.z) + this.centerX;
            pixelY = (s.y - this.centerY) * (this.focalLength / s.z) + this.centerY;
            pixelRadius = ((this.focalLength / s.z) / 3) * s.scale;
            this.ctx.fillStyle = s.color;
            this.ctx.beginPath();
            this.ctx.arc(pixelX, pixelY, pixelRadius, 0, 2 * Math.PI, false);
            this.ctx.fill();
        }
        this.ctx.fillStyle = this.warp ? "rgba(0,0,3,0.03)" : "rgba(0,0,3,0.95)";
    };

    // TODO: dynamically stretch on lower dpi for better performance and blur? / 2;
    // to change resolution
    public rescale(factor: number) {
        if (!this.canvas || !this.ctx) { return; }
        // const rect = this.canvas.getBoundingClientRect();
        const rect = {
            height: parseInt(this.canvas.style.height, 10),
            width: parseInt(this.canvas.style.width, 10)
        };
        this.canvas.width = Math.floor(rect.width * factor);
        this.canvas.height = Math.floor(rect.height * factor);
        // this.ctx.scale(1/factor, 1/factor);
    }

    public resize(scaleFactor = 0.33) {
        if (!this.canvas) { return; }
        this.rescale(scaleFactor);
        this.focalLength = this.canvas.width;
        this.centerX = this.canvas.width / 2;
        this.centerY = this.canvas.height / 2;
        // we can tweak the speed here
        this.step = (this.canvas.height + this.canvas.width) / 2000;
        this.warpStep = this.step * 2;
    }
}
