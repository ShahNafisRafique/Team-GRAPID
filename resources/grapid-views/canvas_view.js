/* 
Contents: canvas_view.js defines the vue.js component that acts as 
our drawing canvas

Authors: Matt Smitherman, Shah Nafis Rafique, Yoonah Lee

Last Updated: 4/26/2018
*/

Vue.component("canvas-view", {
	template: "#canvas-view-template",
  props : ["program"],
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
        let objArr = this.objects;
        this.selected = sceneObjectModule.getSelectedObj;
				console.log(this.selected);
			},
			drag: function(event) {
				if(this.mode === "drag"){
					p = this.get_coords(event);
          console.log(p.x, p.y);
          sceneObjectModule.setPlace(p.x, p.y);
					//set object x y to event x y, redraw
          sceneObjectModule.drawScene(this.program);
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

