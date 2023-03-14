<script setup>
import { onMounted } from "vue";
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";

onMounted(() => {
  if (typeof window !== undefined) {
    var s_div = document.createElement("div"); // 创建节点
    s_div.setAttribute("id", "gitalk-page-container"); // 设置id
    document.querySelector(".content-container").appendChild(s_div); // querySelector的节点可自己根据自己想加载的地方设置
    var gitment = new Gitalk({
      id: location.pathname, // 可选。默认为 location.href
      owner: "mjjh1717", // GitHub repository 所有者
      repo: "blog", // GitHub repository
      clientID: "a8e272eca5e30de72036", // 自己的clientID
      clientSecret: "00301f0aee3291294890432216c7372d9fe99ce2", // 自己的clientSecret
      admin: ["mjjh1717"], // GitHub repository 所有者
      labels: ["Gitalk"], // GitHub issue 的标签
      createIssueManually: true, //如果当前页面没有相应的 isssue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。
    });
    gitment.render("gitalk-page-container");
  }
});
</script>
