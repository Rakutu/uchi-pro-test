import { createRouter, createWebHistory } from "vue-router";
import TokensList from "@/pages/TokensList";
import AddToken from "@/pages/AddToken";
import DeleteToken from "@/pages/DeleteToken";

const routes = [
    { path: '/', component: TokensList },
    { path: '/add-token', component: AddToken },
    { path: '/token/:id/delete', component: DeleteToken },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})

export default router;