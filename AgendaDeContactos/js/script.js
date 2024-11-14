const app = {
    data() {
        return {
            nuevoContacto: {
                nombre: '',
                telefono: '',
                categoria: ''
            },
            contactos: [],
            totalMensajes: 0,
            totalLlamadas: 0
        };
    },
    methods: {
        agregarContacto() {
            if (this.nuevoContacto.nombre && this.nuevoContacto.telefono && this.nuevoContacto.categoria) {
                this.contactos.push({
                    ...this.nuevoContacto,
                    mensajes: 0,
                    llamadas: 0
                });
                this.nuevoContacto = { nombre: '', telefono: '', categoria: '' };
                this.calcularTotales();
            }
        },
        eliminarContacto(index) {
            this.contactos.splice(index, 1);
            this.calcularTotales();
        },
        incrementarMensajes(index) {
            if (this.contactos[index].mensajes < 25) {
                this.contactos[index].mensajes++;
                this.calcularTotales();
            }
        },
        decrementarMensajes(index) {
            if (this.contactos[index].mensajes > 0) {
                this.contactos[index].mensajes--;
                this.calcularTotales();
            }
        },
        incrementarLlamadas(index) {
            if (this.contactos[index].llamadas < 25) {
                this.contactos[index].llamadas++;
                this.calcularTotales();
            }
        },
        decrementarLlamadas(index) {
            if (this.contactos[index].llamadas > 0) {
                this.contactos[index].llamadas--;
                this.calcularTotales();
            }
        },
        calcularTotales() {
            this.totalMensajes = this.contactos.reduce((acc, contacto) => acc + contacto.mensajes, 0);
            this.totalLlamadas = this.contactos.reduce((acc, contacto) => acc + contacto.llamadas, 0);
        }
    },
    computed: {
        cantidadContactos() {
            return this.contactos.length;
        }
    }
};

Vue.createApp(app).mount('#app');
