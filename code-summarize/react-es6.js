/**
 * Created by wb-lihoujie on 2017/1/9.
 */

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static propTypes = {
        title: React.PropTypes.string,
        withDrawClick: React.PropTypes.func
    };

    static defaultProps = {
        title: 'dd',
        withDrawClick: () => {}
    };

    render(){
        return(
            <div>
                fdfadsf
            </div>
        );
    }
    // 项目型采购一期 技术总结
    /*
    * 函数里传函数，调用函数，处理异步场景。例如：如要根据接口返回的状态去处理分别执行不同的逻辑
    * window.onhashchange = (e) => { #后面发生改变时触发。 componentDidMount里处理
         const projectNo = this.getWindowHashProjectNo();
         this.setState({ selectedProjectNo: projectNo });
         this.onProjectSelect(projectNo);
        };
    * 一个组件可以同时（写多个export） export 对象，方法（函数,类），组件。 引入时，import getComponentTemplate（方法）, *（指定一个对象） as componentNames（对象） from '../../components/Common/getComponentTemplate';
    * * 例 export const deepCopy = obj => JSON.parse(JSON.stringify(obj));
    * * // 写法一
        export var m = 1;
        export function f() {};

        // 写法二
         var m = 1;
         export {m};

         // 写法三
        var n = 1;
        export {n as m};

        function f() {}
        export {f};
    ** 使用as关键字，重命名
    * * export function area(radius) {
            return Math.PI * radius * radius;
        }

        export function circumference(radius) {
            return 2 * Math.PI * radius;
        }

        import { area, circumference } from './circle';
        console.log('圆面积：' + area(4));
        console.log('圆周长：' + circumference(14));

        或者
        import * as circle from './circle';
        console.log('圆面积：' + circle.area(4));
        console.log('圆周长：' + circle.circumference(14));
    * export default function () { 只能有一个默认输出
        console.log('foo');
    } 其他模块加载该模块时，import命令可以为该匿名函数指定任意名字。
        import customName from './export-default';  注意import后不适用大括号
        customName(); /
    * react组件之间继承 class PageApprove extends BasePage （多个浮层，下面提价按钮，看最终的组件）
    * <div className={classnames({
        [Styles.wrap]: true,
        ['action-showing']: this.state.showing
     })>
     */
}
ReactDOM.render(
 <Page />, document.getElementById('App')
);