//canvas view

Vue.component("canvas-view", {
	template: "#canvas-view-template",
	data: function () {
		return {
			isVisible: true,
			message: "",
			height: 500,
			width: 500,
			mode: "drag",
			selected: {},
			provider: {
				context: null
			}
		}
	},
	computed: {
		objects: function() {
			return sceneObjectModule.getObjArray();
		}
	}, 
		methods: {
			provide: function() {
				return {
					provider: this.provider
				}
			},
			show: function() {
				this.isVisible = true;
			},
			hide: function() {
				this.isVisible = false;
			},
			toggle: function() {
				this.isVisible = !this.isVisible;
			},
			setFocus: function(event) {
				console.log(this.objects);
			},
			drag: function(event) {
				if(mode === "drag"){
					p = get_coords(event);
					//set object x y to event x y, redraw
				}
			},
			get_coords: function(event) {
				var x = event.pageX;
				var y = event.pageY;
				return {'x': x,
								'y': y	
							}
			},
			resize: function(){
				let canvas = this.$refs['grapid-canvas'];
				canvas.width = this.width;
				canvas.height = this.height;
			},
      
		},
		
		mounted: function() {		
			this.resize();
			init.webGL(this.$refs['grapid-canvas']);
		},
    
    
})

	var grapidApp = new Vue({
		el: "#grapid-app",
		data: {
			color: "",
			hue : 200,
      program: null
		},
		methods: {
			updateColor: function(event) {
				this.color = event.color
				this.hue = event.hue
			},
      getShaderProgram: function () {
        return init.shaders(); 
      }
		}, 
    mounted: function(){
      this.program = this.getShaderProgram();
    }
	})

